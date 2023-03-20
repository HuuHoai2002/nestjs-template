import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Length(5, 255)
  public email: string;
  @IsNotEmpty()
  @IsString()
  @Length(8, 255)
  public password: string;
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  public full_name: string;
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  public username: string;
}
