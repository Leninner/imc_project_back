import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Schedule } from "../schedule/schedule.entity";

@Entity()
export class UserFood {

    @PrimaryColumn()
    user_food_id: number;

    @ManyToOne(() => User, user => user.user_id)
    @JoinColumn({ name: "user_id_food" })
    user_id_food: User;
    
    @Column()
    calories: number;

    @ManyToOne(() => Schedule, sch => sch.schedule_id)
    @JoinColumn({ name: "schedule_id_user_food" })
    schedule_id: Schedule;

}