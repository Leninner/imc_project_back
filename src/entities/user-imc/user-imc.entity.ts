import { Entity, Column, PrimaryGeneratedColumn, IntegerType, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class UserImc {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.user_imcs)
    @JoinColumn({ name: "user_id" })
    user_id_imc: User;

    @Column()
    register_date: Date;

    @Column()
    height: number;

    @Column()
    weight: number;

    @Column()
    birth_day: Date;

    @Column()
    gender: string;


}