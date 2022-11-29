import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Exclude keys from user
  private exclude<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }

  async validateUser(identifier: string, password: string) {
    const user = await this.usersService.findByIdentifier(identifier);

    const isMatch = user && (await bcrypt.compare(password, user.password));

    if (!isMatch) {
      throw new UnauthorizedException('Usuário ou senha incorretos!');
    }

    const userWithoutPassword = this.exclude(user, 'password');

    return userWithoutPassword;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id, role: user.role };

    const { fullName, id, club, role } = user;

    return {
      user: {
        fullName,
        id,
        club,
        role,
      },
      token: this.jwtService.sign(payload),
    };
  }
}
