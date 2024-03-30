import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, UseFilters, UseInterceptors } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exceptions';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices:UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getAllUsers() {
    return this.usersServices.getAllUsers().map(user => new SerializedUser(user))
  }

  // need this for incepting altering the return...in this case SerializedUser
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.usersServices.getUserByUsername(username)
    if (user) return new SerializedUser(user) 
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter) // for filtering
  @Get('id/:id')
  getUserById(@Param('id',ParseIntPipe) id: number) {
    const user = this.usersServices.getUserById(id)
    if (user) return new SerializedUser(user) 
    else throw new UserNotFoundException('User not found by id', 400) // or just UserNotFoundException() or use nestjs exceptions
  }
} 
