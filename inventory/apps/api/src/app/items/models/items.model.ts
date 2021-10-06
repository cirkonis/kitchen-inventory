import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class itemsModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  stock: number;

  @Field(() => Int)
  threshold: number;

  @Field(() => Int)
  orderAmount: number;

  @Field()
  status: string;

  @Field()
  category: string;
}
