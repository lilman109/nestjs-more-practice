import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {

  private users: User[] = [
    {
      id: 1,
      username: 'anson',
      password: 'anson'
    },
    {
      id: 2,
      username: 'bob',
      password: 'bob'
    },
    {
      id: 3,
      username: 'clark',
      password: 'clark'
    },
    {
      id: 4,
      username: 'sean',
      password: 'sean'
    },
  ]

  getAllUsers() {
    return this.users.map((user) =>  user)
  }

  getUserByUsername(username: string) {
   return this.users.find(user => user.username === username)
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id)
  }
}
