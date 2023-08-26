import { AppEntity } from "src/calcApp/entites/calcApp.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({nullable:false})
    password: string;

    @OneToMany(() => AppEntity, app => app.user)
    apps: AppEntity[];

}