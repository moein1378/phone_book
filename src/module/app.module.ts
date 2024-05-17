import { Module } from '@nestjs/common';
import { AppController } from '../controller/app/app.controller';
import { AppService } from '../controller/app/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
