import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exceptions';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser, User } from 'src/users/types/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices:UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  async getAllUsers() {
    const users = await this.usersServices.getAllUsers()
    const serializedUsers = users.map(user => new SerializedUser(user)) 
    return serializedUsers
  }

  // need this for incepting altering the return...in this case SerializedUser
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.usersServices.getUserByUsername(username)
    if (user) return new SerializedUser(user) 
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter) // for filtering
  @Get('id/:id')
  async getUserById(@Param('id',ParseIntPipe) id: number) {
    const user = await this.usersServices.getUserById(id)
    if (user) return new SerializedUser(user) 
    else throw new UserNotFoundException('User not found by id', 400) // or just UserNotFoundException() or use nestjs exceptions
  }

  @Post('create')
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersServices.createUser(createUserDto);
  }

} 
