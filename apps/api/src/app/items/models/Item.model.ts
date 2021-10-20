import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

@ObjectType()
@InputType('InputItem')
export class ItemModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  stock: number;

  @Field()
  unit: string;

  @Field(() => Int)
  threshold: number;

  @Field(() => Int)
  orderAmount: number;

  @Field()
  status: string;

  @Field()
  category: string;
}
