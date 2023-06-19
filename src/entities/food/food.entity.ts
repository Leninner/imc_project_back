import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  RelationId,
} from 'typeorm'
import { FoodType } from '../food-type/food-type.entity'
import { UserFood } from '../user-food/user-food.entity'
import { BaseAppEntity } from '../../utils/base.entity'
import { Category } from '../categories/category.entity'

@Entity()
export class Food extends BaseAppEntity {
  @Column()
  name: string

  @Column()
  calories: number

  @ManyToMany(() => Category, (categories) => categories.foods, { eager: true })
  @JoinTable()
  categories: Category[]

  @ManyToOne(() => FoodType, (foodTypes) => foodTypes.foods)
  type: FoodType

  @RelationId((food: Food) => food.type)
  @Column()
  typeId: number

  @OneToMany(() => UserFood, (userFood) => userFood.foodId)
  userFood: UserFood[]
}
