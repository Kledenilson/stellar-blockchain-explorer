import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('block/:number')
  async getBlock(@Param('number') number: string) {
    return this.appService.getBlock(number);
  }

  @Get('transaction/:hash')
  async getTransaction(@Param('hash') hash: string) {
    return this.appService.getTransaction(hash);
  }

  @Get('balance/:address')
  async getBalance(@Param('address') address: string) {
    return this.appService.getBalance(address);
  }
}