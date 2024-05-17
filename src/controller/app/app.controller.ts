import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Patch,
  Post,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { PhoneBook } from './app.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('phone-book')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-phone-book-list')
  getPhoneBookList(): PhoneBook[] {
    return this.appService.getPhoneBookList();
  }
  @Get('get-phone-by-id/:id')
  getById(@Param('id') id: number): PhoneBook {
    return this.appService.getById(id);
  }
  @Delete('delete-by-id/:id')
  deleteById(@Param('id') id: number): string {
    return this.appService.deleteById(id);
  }

  @Post('update/:id')
  @Header('Content-Type', 'application/json')
  update(@Param('id') id: number, @Body() item: PhoneBook) {
    return this.appService.update(id, item);
  }

  @Patch('update-name/:id/:name')
  updateName(@Param('id') id: number, @Param('name') name: string) {
    return this.appService.updateName(id, name);
  }

  @Post('insert')
  @Header('Content-Type', 'application/json')
  insert(@Body() item: PhoneBook) {
    return this.appService.insert(item);
  }
}
