import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('gio')
  getGio() {
    return this.appService.dataUser
  }//end getGio




  @Get('test')
  getTest() {
    console.log("in test");
    
    return "test";
  }
}
