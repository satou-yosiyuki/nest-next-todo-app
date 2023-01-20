import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ItemsController } from './items/items.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ItemModule, AuthModule, UserModule, TodoModule, PrismaModule],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
