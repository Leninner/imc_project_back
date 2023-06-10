import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "../users/user.entity";
import { Schedule } from "../schedule/schedule.entity";

@Entity()
export class UserFood {

    @PrimaryColumn()
    id: number;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: "user_id" })
    user_id_food: User;
    
    @Column()
    calories: number;

    @ManyToOne(() => Schedule, sch => sch.id)
    @JoinColumn({ name: "schedule_id" })
    schedule_id: Schedule;

}