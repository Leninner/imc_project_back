import { Column, Entity, ManyToMany } from 'typeorm'
import { BaseAppEntity } from '../../utils/base.entity'
import { Food } from '../food/food.entity'

@Entity()
export class Category extends BaseAppEntity {
  @Column()
  name: string

  @ManyToMany(() => Food, (food) => food.categories)
  foods: Food[]
}
