import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private readonly _userData = {
    id: true,
    full_name: true,
    club: true,
    phone: true,
    birth_date: true,
    is_active: true,
    role: true,
    created_at: true,
    updated_at: true,
  };

  create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  findAll() {
    return this.prisma.user.findMany({ select: this._userData });
  }

  async findOne(id: string) {
    return this.prisma.user.findFirst({
      where: { id },
      select: this._userData,
    });
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: this._userData,
    });
  }

  remove(id: string) {
    console.log(`id`, id);
    return this.prisma.user.delete({ where: { id } });
  }
}
