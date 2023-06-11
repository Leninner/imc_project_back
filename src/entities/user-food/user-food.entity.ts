import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from '../users/user.entity'
import { Schedule } from '../schedule/schedule.entity'
import { Food } from '../food/food.entity'

@Entity()
export class UserFood extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  calories: number

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  userId: User

  @ManyToOne(() => Schedule, (schedule) => schedule.id)
  @JoinColumn({ name: 'schedule_id' })
  scheduleId: Schedule

  @ManyToOne(() => Food, (food) => food.id)
  @JoinColumn({ name: 'food_id' })
  foodId: Food
}
