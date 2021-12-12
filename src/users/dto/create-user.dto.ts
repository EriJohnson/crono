import { Club } from '.prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message:
      'O nome completo do usuário dever ter pelos menos $constraint1 caracteres.',
  })
  full_name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Por favor, digite um email válido' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'O nome de usuário dever ter pelos menos $constraint1 caracteres.',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, {
    message: 'A senha deve conter no mínimo $constraint1 caracteres',
  })
  password: string;

  @IsOptional()
  @IsEnum(Club, {
    message:
      'Você deve escolher um dos clubes: URSINHOS, FAÍSCA, FLAMA, TOCHA, JV OU GQ7.',
  })
  club: Club;

  @IsNotEmpty()
  @IsDateString()
  birth_date: string | Date;

  @IsOptional()
  @IsString()
  @MinLength(11, {
    message:
      'O número de telefone deve conter no mínimo $constraint1 caracteres',
  })
  phone?: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
