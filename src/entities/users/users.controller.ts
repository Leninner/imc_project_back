import { Controller, Post, Body } from '@nestjs/common'
import { UserService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto)
  }
}
