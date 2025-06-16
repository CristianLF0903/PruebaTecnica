import { IsOptional, IsInt, IsString, IsEmail, MinLength, Matches, IsNotEmpty } from 'class-validator';

export class UpdateEmployeeDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MinLength(2)
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  firstName?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  lastName?: string;

  @IsEmail()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  position?: string;
}
