import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import * as joi from 'joi';
import { Repository } from "typeorm";
import { User } from "./entites/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';



@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly useRepositry: Repository<User>) { }

    async register(createUserDto: CreateUserDto): Promise<{ success: boolean, token: string } | string> {
        let user = new User();
        this.validateUser(createUserDto);

        if (await this.alreadyExists(createUserDto.email)) {
            console.log('User already exists');
            const token = null;
            return {success:false,token};
        }

        user.email = createUserDto.email;
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        user.password = hashedPassword;
        await this.useRepositry.save(user);

        const token = this.createJwt(user);
        return { success: true, token };
    }
    async login(user: { email: string, password: string }): Promise<{ success: boolean, token: string }  | string> {
        const email = user.email;
        console.log(email+" "+user.password);
        const existingUser = await this.useRepositry.findOne({ where: { email } });

        if (!existingUser) {
            throw new NotFoundException('User with this email does not exist.');
        }

        const isPasswordValid = await bcrypt.compare(user.password, existingUser.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password.');
        }

        const token = this.createJwt(existingUser);
        return { success: true, token }; 
    }
    validateUser(user) {
        const userSchema = joi.object({
            email: joi.string().email().required(),
            password: joi.string().min(6).max(20).required().alphanum()
        });
        const result = userSchema.validate(user);
        console.log(result);
        if (result.error) {
            throw new BadRequestException(result.error.details[0].message);
        }
    }
    async alreadyExists(email: string) {
        const result =await this.useRepositry.findOne({
            where: { email }
        });
        if(result == null)
            return false;
        return true;
    }

    createJwt(user) {
        const privateKey = process.env.privatekey;
        return jwt.sign({ id: user.id, email: user.mail, }, privateKey);
    }
}