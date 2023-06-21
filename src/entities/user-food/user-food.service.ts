import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserFood } from './user-food.entity';

@Injectable()
export class UserFoodService {
  constructor(
    @InjectRepository(UserFood)
    private readonly userFoodRepository: Repository<UserFood>,
  ) {}

  async getAllUserFoodData(): Promise<UserFood[]> {
    return this.userFoodRepository.find({
      relations: ['user'],
    });

  }
}
