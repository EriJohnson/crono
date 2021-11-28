import { Club } from '@prisma/client';
import { Member } from '../entities/member.entity';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateMemberDto extends Member {
  @IsNotEmpty()
  @MinLength(3)
  full_name: string;

  @IsNotEmpty()
  @IsDateString()
  birth_date: string | Date;

  @IsString()
  @IsOptional()
  mother_name?: string;

  @IsString()
  @IsOptional()
  father_name?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  street?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
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
