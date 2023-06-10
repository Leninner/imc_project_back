import { Entity, Column, PrimaryGeneratedColumn, IntegerType, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class UserImc {

    @PrimaryGeneratedColumn()
    imc_id: number;

    @ManyToOne(() => User, user => user.user_imcs)
    @JoinColumn({ name: "user_id_imc" })
    user_id_imc: User;

    @Column()
    register_date: Date;

    @Column()
    imc_height: number;

    @Column()
    imc_weight: number;

    @Column()
    user_birth_day: Date;

    @Column()
    user_gender: string;


}