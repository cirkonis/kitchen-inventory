import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ItemsResolver {
  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!';
  }
}
