import { PartialType } from '@nestjs/mapped-types';
import { Club } from '@prisma/client';
import { CreateMemberDto } from './create-member.dto';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {
  full_name?: string;
  birth_date?: string | Date;
  mother_name?: string;
  father_name?: string;
  phone?: string;
  street?: string;
  city?: string;
  neighborhood?: string;
  zip_code?: string;
  is_active?: boolean;
  club?: Club;
}
