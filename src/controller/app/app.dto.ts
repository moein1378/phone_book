import { ApiProperty } from '@nestjs/swagger';

export class PhoneBook {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phoneNumber: number;
}
