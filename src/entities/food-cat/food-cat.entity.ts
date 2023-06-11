import { Column, Entity, OneToMany } from 'typeorm'
import { Food } from '../food/food.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class FoodCat extends BaseAppEntity {
  @Column()
  name: string

  @OneToMany(() => Food, (food) => food.categoryId)
  foods: Food[]
}
