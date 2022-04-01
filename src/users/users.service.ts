import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const SALT_ROUNDS = 10;

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

  create(createUserDto: CreateUserDto) {
    const data: CreateUserDto = {
      ...createUserDto,
      password: bcrypt.hashSync(createUserDto.password, SALT_ROUNDS),
    };

    return this.prisma.user.create({ data, select: this._userData });
  }

  findAll() {
    return this.prisma.user.findMany({ select: this._userData });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: this._userData,
    });

    if (!user) throw new NotFoundException();

    return user;
  }

  async findByIdentifier(identifier: string) {
    return this.prisma.user.findFirst({
      where: { OR: [{ email: identifier }, { username: identifier }] },
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
    return this.prisma.user.delete({ where: { id } });
  }
}
