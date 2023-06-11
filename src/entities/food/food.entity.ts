import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { FoodCat } from '../food-cat/food-cat.entity'
import { FoodType } from '../food-type/food-type.entity'
import { UserFood } from '../user-food/user-food.entity'

@Entity()
export class Food extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  calories: number

  @ManyToOne(() => FoodCat, (categories) => categories.foods)
  @JoinColumn({ name: 'category_id' })
  categoryId: FoodCat

  @ManyToOne(() => FoodType, (foodTypes) => foodTypes.foods)
  @JoinColumn({ name: 'type_id' })
  typeId: FoodType

  @OneToMany(() => UserFood, (userFood) => userFood.foodId)
  userFood: UserFood[]
}
