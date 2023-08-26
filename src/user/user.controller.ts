import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('register')
    register(@Body() user: CreateUserDto) {
        return this.userService.register(user);
    }
    @Post('login')
    login(@Body() user: { email: string, password: string }) {
        return this.userService.login(user);
    }
}