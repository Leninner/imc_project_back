import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Food } from '../food/food.entity'

@Entity()
export class FoodCat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Food, (food) => food.categoryId)
  foods: Food[]
}
