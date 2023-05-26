import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get("nuevo")
  newEnpoint(): string {
    return this.appService.newEnpoint();
  }
  
  @Get("newKey")
  newKey(): string {
    return this.appService.newKey()
  }

}
