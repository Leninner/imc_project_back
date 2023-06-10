import { UserImc } from 'src/entities/user-imc/user-imc.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { UserFood } from '../user-food/user-food.entity';


@Entity()
export class User {
   
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  user_name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  birth_day: Date;

  @Column()
  gender: string;

  @OneToMany(() => UserImc, user_imc => user_imc.user_id_imc)
  user_imcs: UserImc[];

  @OneToMany(() => UserFood, user_food => user_food.user_id_food)
  user_food: UserFood[];

}