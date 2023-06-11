import { Column, Entity, ManyToOne, RelationId } from 'typeorm'
import { User } from '../users/user.entity'
import { Schedule } from '../schedule/schedule.entity'
import { Food } from '../food/food.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class UserFood extends BaseAppEntity {
  @Column()
  calories: number

  @ManyToOne(() => User, (user) => user.id)
  user: User

  @RelationId((userFood: UserFood) => userFood.user)
  @Column()
  userId: number

  @ManyToOne(() => Schedule, (schedule) => schedule.id)
  schedule: Schedule

  @RelationId((userFood: UserFood) => userFood.schedule)
  @Column()
  scheduleId: number

  @ManyToOne(() => Food, (food) => food.id)
  food: Food

  @RelationId((userFood: UserFood) => userFood.food)
  @Column()
  foodId: number
}
