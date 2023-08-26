import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { User } from "./entites/user.entity";
import { Repository } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    Repository<User>],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {
}