import { faker } from '@faker-js/faker/locale/pt_BR';

import * as bcrypt from 'bcrypt';

import { Club, PrismaClient, Role } from '@prisma/client';
import { CreateUserDto } from '../src/users/dto/create-user.dto';

const prisma = new PrismaClient();

const SALT_ROUNDS = 10;
const CLUBS: Club[] = ['FAISCA', 'FLAMA', 'URSINHOS', 'GQ7', 'JV', 'TOCHA'];
const ROLES: Role[] = ['ADMIN', 'DEACON', 'DIRECTOR', 'LEADER'];

async function main() {
  for (let i = 0; i < 20; i++) {
    const createUserDto: CreateUserDto = {
      fullName: faker.name.fullName(),
      email: faker.internet.email().toLowerCase(),
      club: faker.helpers.arrayElement(CLUBS),
      role: faker.helpers.arrayElement(ROLES),
      username: faker.internet.userName(),
      password: '12345678',
    };

    const data = {
      ...createUserDto,
      password: bcrypt.hashSync(createUserDto.password, SALT_ROUNDS),
    };

    await prisma.user.create({ data });
  }

  await prisma.$disconnect();
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
