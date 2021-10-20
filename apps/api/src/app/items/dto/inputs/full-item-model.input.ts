import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ItemModel } from '../../models/Item.model';

@InputType('ItemInput')
export class FullItemModelInput {
  @Field(() => ItemModel)
  @IsNotEmpty()
  item: ItemModel;
}
