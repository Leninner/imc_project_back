import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { FoodCat } from '../food-cat/food-cat.entity'
import { FoodType } from '../food-type/food-type.entity'

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => FoodCat, (food_cat) => food_cat.food_cats)
  @JoinColumn({ name: 'food_cat_food' })
  food_cat: FoodCat

  @ManyToOne(() => FoodType, (food_type) => food_type.food_types)
  @JoinColumn({ name: 'type' })
  food_type: FoodType

  @Column()
  calories: number
}
