import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateMemberDto) {
    const member = new Member(data);

    return this.prisma.member.create({ data: member });
  }

  async findAll() {
    const members = await this.prisma.member.findMany();

    return members.map(memberData => {
      const member = new Member(memberData);

      return member;
    });
  }

  async findOne(id: string) {
    const memberData = await this.prisma.member.findUnique({ where: { id } });

    if (!memberData) throw new NotFoundException();

    const member = new Member(memberData);

    return member;
  }

  async update(id: string, data: UpdateMemberDto) {
    const member = new Member(data);

    return await this.prisma.member.update({ where: { id }, data: member });
  }

  remove(id: string) {
    return this.prisma.member.delete({ where: { id } });
  }
}
