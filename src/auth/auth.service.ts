import { Injectable, NotFoundException } from '@nestjs/common';
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

  //Exclude keys from user
  private exclude<User, Key extends keyof User>(
    user: User,
    ...keys: Key[]
  ): Omit<User, Key> {
    for (const key of keys) {
      delete user[key];
    }
    return user;
  }

  async validateUser(identifier: string, password: string): Promise<any> {
    const user = await this.usersService.findByIdentifier(identifier);

    if (!user) {
      throw new NotFoundException();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      const userWithoutPassword = this.exclude(user, 'password');
      return userWithoutPassword;
    }

    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
