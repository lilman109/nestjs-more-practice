import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private  readonly authService: AuthService) {
    super(
      {
        usernameField: "username"
      }
    );
  }

  async validate(username: string, password: string) {
    console.log("local strategy", {username, password})
    const user = this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException()

    return user
  }
}
