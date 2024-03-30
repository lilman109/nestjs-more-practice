import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {

  private users: User[] = [
    {
      username: 'anson',
      password: 'anson'
    },
    {
      username: 'bob',
      password: 'bob'
    },
    {
      username: 'clark',
      password: 'clark'
    },
    {
      username: 'sean',
      password: 'sean'
    },
  ]

  getAllUsers() {
    return this.users.map((user) =>  new SerializedUser(user))
  }

  getUserByUsername(username: string) {
    const user = this.users.find(user => user.username === username)
    return new SerializedUser(user)
  }
}
