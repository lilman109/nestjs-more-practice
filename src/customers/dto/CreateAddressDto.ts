import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAdressDto {
  @IsNotEmpty()
  @IsString()
  line1: string

  @IsString()
  line2?: string

  @IsNumber()
  @IsNotEmpty()
  zip: number

  @IsString()
  @IsNotEmpty()
  city: string

  @IsString()
  @IsNotEmpty()
  state: string
}

