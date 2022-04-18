import { Club, Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
export class Member implements Prisma.MemberUncheckedCreateInput {
  id?: string;
  fullName: string;
  age: number;
  birthDate?: string;
  motherName?: string;
  fatherName?: string;
  phone?: string;
  street?: string;
  houseNumber?: string;
  city?: string;
  neighborhood?: string;
  zipCode?: string;
  isActive?: boolean;
  club: Club;
  createdAt?: string | Date;
  updatedAt?: string | Date;

  constructor(data: Partial<Member> = {}) {
    Object.assign(this, data);

    this.age = this.calculateAge();
  }

  private calculateAge(): number {
    if (!this.birthDate) return this.age;

    const formattedBirthDate = dayjs(this.birthDate);
    return dayjs().diff(formattedBirthDate, 'years');
  }
}
