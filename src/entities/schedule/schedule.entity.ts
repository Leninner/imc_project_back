import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { UserFood } from '../user-food/user-food.entity'

@Entity()
export class Schedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => UserFood, (userFood) => userFood.scheduleId)
  userFood: UserFood[]
}
