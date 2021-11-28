import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMemberDto) {
    return this.prisma.member.create({ data });
  }

  findAll() {
    return this.prisma.member.findMany();
  }

  findOne(id: string) {
    return this.prisma.member.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateMemberDto) {
    return this.prisma.member.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.member.delete({ where: { id } });
  }
}
