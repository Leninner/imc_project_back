import { UserImc } from 'src/entities/user-imc/user-imc.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { UserFood } from '../user-food/user-food.entity';


@Entity()
export class User {
   
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({unique: true})
  user_name: string;

  @Column()
  user_pass: string;

  @Column()
  user_email: string;

  @Column()
  user_birth_day: Date;

  @Column()
  user_gender: string;

  @OneToMany(() => UserImc, user_imc => user_imc.user_id_imc)
  user_imcs: UserImc[];

  @OneToMany(() => UserFood, user_food => user_food.user_id_food)
  user_food: UserFood[];

}