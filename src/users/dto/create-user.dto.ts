import { Club } from '.prisma/client';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message:
      'O nome completo do usuário dever ter pelos menos $constraint1 caracteres.',
  })
  @MaxLength(64, {
    message:
      'O nome completo do usuário dever ter no máximo $constraint1 caracteres.',
  })
  fullName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Por favor, digite um email válido' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'O nome de usuário dever ter pelos menos $constraint1 caracteres.',
  })
  @MaxLength(24, {
    message: 'O nome de usuário dever ter no máximo $constraint1 caracteres.',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message: 'A senha deve conter no mínimo $constraint1 caracteres',
  })
  @MaxLength(24, {
    message: 'A senha deve conter no máximo $constraint1 caracteres',
  })
  password: string;

  @IsOptional()
  @IsEnum(Club, {
    message:
      'Você deve escolher um dos clubes: URSINHOS, FAÍSCA, FLAMA, TOCHA, JV OU GQ7.',
  })
  club: Club;

  @IsNotEmpty()
  @IsString()
  @IsDateString()
  birthdate?: string;

  @IsOptional()
  @IsString()
  @Length(11, 11, {
    message:
      'O número de telefone deve conter no mínimo $constraint1 caracteres',
  })
  phone?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
