import { IsOptional, IsInt, IsString, IsEmail, MinLength, Matches, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  lastName: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  position: string;
}
