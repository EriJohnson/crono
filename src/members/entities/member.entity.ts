import { Club, Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
export class Member implements Prisma.MemberUncheckedCreateInput {
  id?: string;
  fullName: string;
  age: number;
  birthdate?: string;
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
    if (!this.birthdate) return this.age;

    const formattedBirthdate = dayjs(this.birthdate);
    return dayjs().diff(formattedBirthdate, 'years');
  }
}
