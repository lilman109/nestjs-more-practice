import { Exclude } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class User {
  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  password: string
}

export class SerializedUser {
  username: string

  @Exclude()
  password: string

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial)
  }
}
