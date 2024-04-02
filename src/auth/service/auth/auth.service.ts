import { Injectable } from '@nestjs/common';
import { serializeUser } from 'passport';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser, User } from 'src/users/types/User';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(username: string, password: string) {
    console.log("validateUser")
    const user = await this.userService.getUserByUsername(username)
    if (user) {
      const matched = comparePassword(password, user.password)
      if (!matched) {
        console.log("wrong password")
        return null
      }

      const serialized = new SerializedUser(user)
      console.log("serialized", serialized)
      console.log("user validation success!")
      return serialized
    }

    console.log("user validation failed")
    return null
  }
}
