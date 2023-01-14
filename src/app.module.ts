import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [ItemModule],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
