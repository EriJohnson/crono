import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private readonly _userData = {
    full_name: true,
    club: true,
    phone: true,
    birth_date: true,
    is_active: true,
    role: true,
    created_at: true,
    updated_at: true,
  };

  async create(data: CreateUserDto) {
    try {
      await this.prisma.user.create({ data });
    } catch (error) {
      if (error.code === 'P2002') {
        const [errorField] = error.meta.target;

        throw new ConflictException(`O ${errorField} já está em uso`);
      }

      throw new InternalServerErrorException('Erro interno no servidor');
    }
  }

  findAll() {
    return this.prisma.user.findMany({ select: this._userData });
  }

  async findOne(id: string) {
    try {
      return this.prisma.user.findUnique({
        where: { id },
        select: this._userData,
      });
    } catch (error) {}
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: this._userData,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
