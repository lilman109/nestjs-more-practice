import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices:UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getAllUsers() {
    return this.usersServices.getAllUsers()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.usersServices.getUserByUsername(username)
    if (user) return user 
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
  }
}
