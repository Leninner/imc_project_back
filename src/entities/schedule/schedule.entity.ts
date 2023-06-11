import { Column, Entity, OneToMany } from 'typeorm'
import { UserFood } from '../user-food/user-food.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class Schedule extends BaseAppEntity {
  @Column()
  name: string

  @OneToMany(() => UserFood, (userFood) => userFood.scheduleId)
  userFood: UserFood[]
}
