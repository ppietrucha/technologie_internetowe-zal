import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { YachtEntity } from "./yacht.entity";
import { OrderEntity } from "./order.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      YachtEntity, OrderEntity
    ]),
  ],
  providers: [],
  controllers: [],
})
export class DatabaseModule {

}
