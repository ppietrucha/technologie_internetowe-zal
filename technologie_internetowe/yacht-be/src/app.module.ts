import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YachtEntity } from './yacht.entity';
import { OrderEntity } from './order.entity';
import { DatabaseModule } from './database.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      entities: [],
    }),
    TypeOrmModule.forFeature([
      YachtEntity, OrderEntity
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private appService: AppService) {
    this.appService.seeder().then(console.log)
  }
}
