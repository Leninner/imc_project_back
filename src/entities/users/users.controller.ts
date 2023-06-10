import { Controller, Post, Body } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto:createUserDto) {
    return await this.userService.createUser(createUserDto);
  }
}