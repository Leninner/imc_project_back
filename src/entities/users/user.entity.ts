import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm'
import { UserFood } from '../user-food/user-food.entity'
import { UserImc } from '../user-imc/user-imc.entity'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  email: string

  @Column()
  birthday: Date

  @Column()
  gender: string

  @OneToMany(() => UserImc, (userImc) => userImc.userId)
  imcs: UserImc[]

  @OneToMany(() => UserFood, (userFood) => userFood.userId)
  userFood: UserFood[]
}
