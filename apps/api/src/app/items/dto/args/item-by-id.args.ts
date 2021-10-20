import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class ItemByIdArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}
