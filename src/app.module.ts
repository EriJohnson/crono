import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MembersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
