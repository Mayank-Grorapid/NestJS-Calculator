import { Controller, Get, Post, Body, Request, UseGuards } from "@nestjs/common";
import { CalcAppService } from "./calcApp.service";
import { AppEntity } from "./entites/calcApp.entity";
//import { JwtAuthGuard } from "../_auth/jws-auth.guard";

@Controller("calcApp")
//@UseGuards(JwtAuthGuard)
export class CalcAppController {
    constructor(private readonly calcAppService: CalcAppService) { }

    @Get("history")
    async getHistory(@Request() req): Promise<AppEntity[]> {
        return this.calcAppService.getHistory(req);
    }

    @Post("addHistory")
    async addHistory(@Body() calcApp: AppEntity, @Request() req): Promise<AppEntity> {
        return this.calcAppService.addHistory(calcApp, req);
    }
}
