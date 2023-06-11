import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm'
import { FoodCat } from '../food-cat/food-cat.entity'
import { FoodType } from '../food-type/food-type.entity'
import { UserFood } from '../user-food/user-food.entity'
import { BaseAppEntity } from '../../utils/base.entity'

@Entity()
export class Food extends BaseAppEntity {
  @Column()
  name: string

  @Column()
  calories: number

  @ManyToOne(() => FoodCat, (categories) => categories.foods)
  category: FoodCat

  @RelationId((food: Food) => food.category)
  @Column()
  categoryId: number

  @ManyToOne(() => FoodType, (foodTypes) => foodTypes.foods)
  type: FoodType

  @RelationId((food: Food) => food.type)
  @Column()
  typeId: number

  @OneToMany(() => UserFood, (userFood) => userFood.foodId)
  userFood: UserFood[]
}
