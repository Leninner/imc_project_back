import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserFood } from "../user-food/user-food.entity";


@Entity()
export class Schedule {

    @PrimaryGeneratedColumn()
    schedule_id: number;

    @Column()
    schedule_name: string;

    @OneToMany(() => UserFood, user_food =>user_food.schedule_id)
    user_food: UserFood[];

}