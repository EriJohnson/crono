import { Club, Prisma, Role } from '.prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: string;
  email: string;
  full_name: string;
  birth_date: string;
  username: string;
  password: string;
  phone?: string;
  club?: Club;
  role?: Role;
  is_active?: boolean;
  created_at?: string | Date;
  updated_at?: string | Date;
}
