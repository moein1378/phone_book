import { Injectable } from '@nestjs/common';
import { type PhoneBook } from './app.dto';
@Injectable()
export class AppService {
  private phoneBook: PhoneBook[];
  getHello(): string {
    return 'Hello World!';
  }
  getPhoneBookList() {
    return this.phoneBook;
  }
  getById(id: number) {
    return this.phoneBook.find((item) => item.id === id);
  }
  deleteById(id: number) {
    this.phoneBook = this.phoneBook.filter((item) => {
      item.id != id;
    });
    return 'ok';
  }
  update(id: number, item: PhoneBook) {}
  updateName(id: number, name: string) {}
  insert(item: PhoneBook) {}
}
