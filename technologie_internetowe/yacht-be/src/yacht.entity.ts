import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";

@Entity('Yacht')
export class YachtEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  imageLink: string;

@ManyToOne(
  orders => OrderEntity,
  orders => orders.id
)
  orders: OrderEntity
}
