import { Entity, Column, PrimaryGeneratedColumn, IntegerType, PrimaryColumn, OneToMany } from 'typeorm';
import { Food } from '../food/food.entity';

@Entity()
export class FoodType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Food, food => food.food_type)
    food_types: FoodType[];

}