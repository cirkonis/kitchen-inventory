import { ObjectType, Field } from '@nestjs/graphql';
import { ItemModel } from './Item.model';

@ObjectType()
export class ItemsModel {
  @Field(() => [ItemsModel])
  items: ItemModel[];
}
