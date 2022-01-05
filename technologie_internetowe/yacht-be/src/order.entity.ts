import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { YachtEntity } from './yacht.entity';

@Entity('Order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  from: Date;

  @Column()
  to: Date;

  @Column()
  price: number;

  @ManyToOne(
    yacht => YachtEntity,
    yacht => yacht.id
  )
  yachtId: number;
}
