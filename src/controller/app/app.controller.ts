import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { PhoneBookModel } from 'src/models/phone-book.model';

@ApiTags('phone-book')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-phone-book-list')
  async getPhoneBookList(): Promise<PhoneBookModel[]> {
    return await this.appService.getPhoneBookList();
  }
  // @Get('get-phone-by-id/:id')
  // getById(@Param('id') id: number): PhoneBook {
  //   return this.appService.getById(id);
  // }
  // @Delete('delete-by-id/:id')
  // deleteById(@Param('id') id: number): string {
  //   return this.appService.deleteById(id);
  // }

  // @Post('update/:id')
  // @Header('Content-Type', 'application/json')
  // update(@Param('id') id: number, @Body() item: PhoneBook) {
  //   return this.appService.update(id, item);
  // }

  // @Patch('update-name/:id/:name')
  // @ApiParam({
  //   name: 'id',
  //   type: 'number',
  // })
  // @ApiParam({
  //   name: 'name',
  //   type: 'string',
  // })
  // updateName(@Param('id') id: number, @Param('name') name: string) {
  //   return this.appService.updateName(id, name);
  // }

  @Post('insert')
  async insert(@Body() item: PhoneBookModel) {
    return await this.appService.insert(item);
  }
}
