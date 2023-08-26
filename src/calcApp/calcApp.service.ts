import { Injectable, Request } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AppEntity } from "./entites/calcApp.entity";
import { Repository } from "typeorm";

@Injectable()
export class CalcAppService {
    constructor(@InjectRepository(AppEntity) private readonly useRepositry: Repository<AppEntity>) { }

    async getHistory(@Request() req): Promise<AppEntity[]> {
        //console.log(req);
        const userId: number = req['user'].id;

        const hist = await this.useRepositry
            .createQueryBuilder('appEntity')
            .where('appEntity.userId = :userId', { userId })
            .getMany();
            console.log(hist);
            return hist;
    }

    async addHistory(calcApp: AppEntity, @Request() req): Promise<AppEntity> {
        const userId: number = req['user'].id;
        calcApp.userId = userId;
        console.log(calcApp);
        return await this.useRepositry.save(calcApp);
    }

    //     async updateHistory(historyId: number, updatedData: Partial<AppEntity>, @Request() req): Promise<AppEntity | undefined> {
    //     const userId: number = req['user'].id;

    //     const existingHistory = await this.useRepositry.findOne({ id: historyId, userId });
    //     if (!existingHistory) {
    //         return undefined; // Return undefined or throw NotFoundException depending on your requirement
    //     }

    //     await this.useRepositry.update({ id: historyId, userId }, updatedData);
    //     return this.useRepositry.findOne(historyId);
    // }


    async deleteHistory(historyId: number, @Request() req): Promise<void> {
        const userId: number = req['user'].id;
        await this.useRepositry.delete({ id: historyId, userId });

    }
}