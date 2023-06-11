import { Entity, Column, OneToMany } from 'typeorm'
import { Food } from '../food/food.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class FoodType extends BaseAppEntity {
  @Column()
  name: string

  @OneToMany(() => Food, (food) => food.typeId)
  foods: Food[]
}
