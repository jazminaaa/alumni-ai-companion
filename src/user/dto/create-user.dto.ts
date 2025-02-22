import { IsEmail, IsNotEmpty, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsArray()
  skills: string[];

  @IsArray()
  interests: string[];

  @IsArray()
  careerGoals: string[];

  @IsNotEmpty()
  token : string;
}