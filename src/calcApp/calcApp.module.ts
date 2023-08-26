import { Module } from "@nestjs/common";
import { CalcAppController } from "./calcApp.controller";
import { CalcAppService } from "./calcApp.service";
import { Repository } from "typeorm";
import { AppEntity } from "./entites/calcApp.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([AppEntity]), Repository<AppEntity>],
    controllers: [CalcAppController],
    providers: [CalcAppService],
})
export class CalcAppModule { }