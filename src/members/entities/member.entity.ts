import { Club, Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
export class Member implements Prisma.MemberUncheckedCreateInput {
  id?: string;
  full_name: string;
  age: number;
  birth_date?: string | Date;
  mother_name?: string;
  father_name?: string;
  phone?: string;
  street?: string;
  house_number?: string;
  city?: string;
  neighborhood?: string;
  zip_code?: string;
  is_active?: boolean;
  club: Club;
  created_at?: string | Date;
  updated_at?: string | Date;

  constructor(data: Partial<Member> = {}) {
    Object.assign(this, data);

    this.age = this.calculateAge();
  }

  private calculateAge(): number {
    if (!this.birth_date) return this.age;

    const formattedBirthDate = dayjs(this.birth_date);
    return dayjs().diff(formattedBirthDate, 'years');
  }
}
