import { Club } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Member } from '../entities/member.entity';

export class CreateMemberDto extends Member {
  @IsNotEmpty()
  @MinLength(3)
  full_name: string;

  @IsOptional()
  @IsInt()
  age: number;

  @IsOptional()
  @IsDateString()
  birth_date: string | Date;

  @IsOptional()
  @IsString()
  mother_name?: string;

  @IsOptional()
  @IsString()
  father_name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  @IsString()
  @IsOptional()
  zip_code?: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsEnum(Club)
  club: Club;
}
