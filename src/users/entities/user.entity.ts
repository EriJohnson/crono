import { Club, Prisma, Role } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;
  fullName: string;
  email: string;
  username: string;
  password: string;
  phone?: string;
  birthdate?: string;
  club?: Club;
  role?: Role;
  isActive?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
