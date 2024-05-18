import { Module } from '@nestjs/common';
import { AppController } from '../controller/app/app.controller';
import { AppService } from '../controller/app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneBookModel } from 'src/models/phone-book.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'moein',
      password: '123456',
      database: 'db_test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PhoneBookModel]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
