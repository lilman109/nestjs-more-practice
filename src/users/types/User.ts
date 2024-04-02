import { Exclude } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class User {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  password: string
}

export class SerializedUser {
  id: number
  username: string

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial)
  }
}
