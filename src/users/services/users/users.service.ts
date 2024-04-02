import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  constructor(private readonly dataService: DatabaseService) {}
  /**/
  /* private users: User[] = [ */
  /*   { */
  /*     id: 1, */
  /*     username: 'anson', */
  /*     password: 'anson' */
  /*   }, */
  /*   { */
  /*     id: 2, */
  /*     username: 'bob', */
  /*     password: 'bob' */
  /*   }, */
  /*   { */
  /*     id: 3, */
  /*     username: 'clark', */
  /*     password: 'clark' */
  /*   }, */
  /*   { */
  /*     id: 4, */
  /*     username: 'sean', */
  /*     password: 'sean' */
  /*   }, */
  /* ] */

  async getAllUsers() {
    return await this.dataService.user.findMany()
  }

  async getUserByUsername(username: string) {
    console.log("find user by", username)
   return await this.dataService.user.findFirst({
      where: {
        username
      }
    })
  }

  async getUserById(id: number) {
    return await this.dataService.user.findUnique({
      where: {
        id
      }
    })
  }

  async createUser(createUserDto: Prisma.UserCreateInput) {
    return await this.dataService.user.create({
      data: createUserDto
    })
  }
}
