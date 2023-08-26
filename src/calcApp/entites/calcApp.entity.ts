import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entites/user.entity';

@Entity()
export class AppEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255,nullable:false })
    expression: string;

    @ManyToOne(() => User, user => user.apps)
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ type: 'int', nullable: false })
    userId: number;
}
