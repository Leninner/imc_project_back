import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm'
import { Food } from '../food/food.entity'

@Entity()
export class FoodType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Food, (food) => food.typeId)
  foods: Food[]
}
