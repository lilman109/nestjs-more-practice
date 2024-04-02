import { Injectable } from '@nestjs/common';
import { serializeUser } from 'passport';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(username: string, password: string) {
    console.log("validateUser")
    const user = await this.userService.getUserByUsername(username)
    if (user && user.password === password) {
      console.log("user validation success!")
      const serialized = new SerializedUser(user)
      console.log("serialized", serialized)
      return serialized
    }

    console.log("user validation failed")
    return null
  }
}
