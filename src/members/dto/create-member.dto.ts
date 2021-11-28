import { Club } from '@prisma/client';
import { Member } from '../entities/member.entity';

export class CreateMemberDto extends Member {
  full_name: string;
  birth_date: string | Date;
  mother_name?: string;
  father_name?: string;
  phone?: string;
  street?: string;
  city?: string;
  neighborhood?: string;
  zip_code?: string;
  is_active?: boolean;
  club: Club;
}
