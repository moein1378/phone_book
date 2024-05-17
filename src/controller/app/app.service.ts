import { Injectable } from '@nestjs/common';
import { type PhoneBook } from './app.dto';
@Injectable()
export class AppService {
  private phoneBook: PhoneBook[];
  getPhoneBookList() {
    return this.phoneBook;
  }
  getById(id: number) {
    return this.phoneBook.find((item) => item.id == id);
  }
  deleteById(id: number) {
    this.phoneBook = this.phoneBook.filter((item) => {
      item.id != id;
    });
    return 'ok';
  }
  update(id: number, item: PhoneBook) {
    const foundIndex = this.phoneBook.findIndex(
      (phoneBookItem: PhoneBook) => phoneBookItem.id == id,
    );
    this.phoneBook[foundIndex] = item;
    return this.phoneBook;
  }
  updateName(id: number, name: string) {
    const foundIndex = this.phoneBook.findIndex(
      (phoneBookItem: PhoneBook) => phoneBookItem.id == id,
    );
    this.phoneBook[foundIndex].name = name;
    return this.phoneBook;
  }
  insert(item: PhoneBook) {
    this.phoneBook.unshift(item);
    return this.phoneBook;
  }
}
