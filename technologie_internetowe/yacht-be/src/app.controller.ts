import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { YachtEntity } from './yacht.entity';
import { OrderEntity } from './order.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':type')
  getAll(@Param('type') type: string): Promise<YachtEntity[]> {
    return this.appService.getSelectedType(type);
  }
  @Post()
  order(@Body() body: OrderEntity): any {
    console.log(body);
  }

  @Get('byId/:id')
  public getByYachtId(@Param('id') param: string): any {
    return this.appService.getByYachtId(param);
  }

  @Get('orders/:yachtId')
  public getYachtsOrders(@Param('yachtId') param: string) {
    return this.appService.getYachtOrders(Number(param));
  }

  @Post('place-order')
  public placeOrder(@Body() body): any {
    return this.appService.placeOrder(body);
  }

  @Get('find-all')
  public getAllYachts(): any {
    // return this.appService.getAll();
  }
}
