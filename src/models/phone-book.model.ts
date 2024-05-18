import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhoneBookModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @ApiProperty()
  fullName: string;

  @Column({ type: 'bigint' })
  @ApiProperty()
  phoneNumber: number;
}
