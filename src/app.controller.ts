import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('receiver')
  @Render('receive')
  renderReceive() {
  }

  @Get('sender')
  @Render('send')
  renderSend() {
  }
}
