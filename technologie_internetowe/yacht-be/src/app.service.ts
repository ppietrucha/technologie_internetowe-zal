import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { YachtEntity } from './yacht.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(YachtEntity)
    private yachtEntity: Repository<YachtEntity>,
    @InjectRepository(OrderEntity)
    private orderEntity: Repository<OrderEntity>,
  ) {}

  getSelectedType(type: string): Promise<YachtEntity[]> {
    return this.yachtEntity.find({
      where: {
        type,
      },
    });
  }

  getYachtOrders(yacht: number): Promise<OrderEntity[]> {
    return this.orderEntity.find({
      where: {
        yachtId: yacht,
      },
    });
  }

  getByYachtId(param: string) {
    return this.yachtEntity.findOne({
      where: {
        id: param,
      },
      relations: ['orders'],
    });
  }

  placeOrder(body) {
    return this.orderEntity.save(body);
  }

  async seeder(): Promise<void> {
    if ((await this.yachtEntity.count()) === 0) {
      const first: YachtEntity = {
        description: 'brak opisu',
        id: 0,
        imageLink:
          'https://cdn.pixabay.com/photo/2020/05/11/17/08/boat-5159224__340.jpg',
        name: 'Yacht blacksparrow',
        orders: undefined,
        price: 150,
        type: 'sea',
      };
      const second: YachtEntity = {
        description: 'dla ekspertów',
        id: 0,
        imageLink:
          'https://cdn.pixabay.com/photo/2020/05/29/21/46/seascape-5236865__480.jpg',
        name: 'żaglówka blow',
        orders: undefined,
        price: 30,
        type: 'lake',
      };
      const thrid: YachtEntity = {
        description: 'dla amatorów',
        id: 0,
        imageLink:
          'https://cdn.pixabay.com/photo/2015/09/22/19/00/ship-952292__340.jpg',
        name: 'żaglówka flow',
        orders: undefined,
        price: 150,
        type: 'sea',
      };
      const fourth: YachtEntity = {
        description: 'Idealny do niedzielnego relaxu',
        id: 0,
        imageLink:
          'https://cdn.pixabay.com/photo/2018/05/14/08/38/sailing-boat-3399014__340.jpg',
        name: 'żaglówka freshflow',
        orders: undefined,
        price: 150,
        type: 'lake',
      };
      const fifth: YachtEntity = {
        description: 'Yacht nightdream',
        id: 0,
        imageLink:
          'https://cdn.pixabay.com/photo/2018/06/17/17/00/boat-3480914__340.jpg',
        name: 'Luksusowy jacht dla rodziny',
        orders: undefined,
        price: 200,
        type: 'sea',
      };

      this.yachtEntity.save(first);
      this.yachtEntity.save(second);
      this.yachtEntity.save(thrid);
      this.yachtEntity.save(fourth);
      this.yachtEntity.save(fifth);
    }
  }
}
