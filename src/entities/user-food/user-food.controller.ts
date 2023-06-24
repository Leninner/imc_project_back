import { Controller, Get } from '@nestjs/common'
import { UserFoodService } from './user-food.service'
import { UserFood } from './user-food.entity'

@Controller('user-food')
export class UserFoodController {
  constructor(private readonly userFoodService: UserFoodService) {}

  @Get()
  async getAllUserFoodData(): Promise<UserFood[]> {
    return this.userFoodService.getAllUserFoodData()
  }
}
