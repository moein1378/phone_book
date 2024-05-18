import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhoneBookModel } from 'src/models/phone-book.model';
import { Repository } from 'typeorm';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PhoneBookModel)
    private repoPhoneBook: Repository<PhoneBookModel>,
  ) {}
  // private phoneBook: PhoneBook[] = [];
  async getPhoneBookList() {
    return await this.repoPhoneBook.find();
  }
  // getById(id: number) {
  //   return this.phoneBook.find((item) => item.id == id);
  // }
  // deleteById(id: number) {
  //   this.phoneBook = this.phoneBook.filter((item) => {
  //     item.id != id;
  //   });
  //   return 'ok';
  // }
  // update(id: number, item: PhoneBook) {
  //   const foundIndex = this.phoneBook.findIndex(
  //     (phoneBookItem: PhoneBook) => phoneBookItem.id == id,
  //   );
  //   this.phoneBook[foundIndex] = item;
  //   return this.phoneBook;
  // }
  // updateName(id: number, name: string) {
  //   const foundIndex = this.phoneBook.findIndex(
  //     (phoneBookItem: PhoneBook) => phoneBookItem.id == id,
  //   );
  //   this.phoneBook[foundIndex].name = name;
  //   return this.phoneBook;
  // }
  async insert(item: PhoneBookModel) {
    return await this.repoPhoneBook.insert(item);
  }
}
