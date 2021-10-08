import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemByIdArgs } from './dto/args/item-by-id.args';
import { ItemsService } from './items.service';
import { FullItemModelInput } from './dto/inputs/full-item-model.input';
import { ItemModel } from './models/Item.model';

@Resolver()
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!';
  }

  @Query(() => ItemModel)
  getItem(@Args() getItemArgs: ItemByIdArgs): Promise<ItemModel> {
    return this.itemsService.getItem(getItemArgs.id);
  }

  @Query(() => [ItemModel])
  listItems(): Promise<ItemModel[]> {
    return this.itemsService.listItems();
  }

  @Mutation(() => ItemModel)
  createItem(
    @Args('createItemArgs') createItemData: FullItemModelInput
  ): Promise<ItemModel> {
    return this.itemsService.createItem(createItemData.item);
  }

  @Mutation(() => ItemModel)
  updateItem(
    @Args('updateItemArgs')
    updateItemData: FullItemModelInput
  ): Promise<ItemModel> {
    return this.itemsService.updateItem(updateItemData.item);
  }

  @Mutation(() => ItemModel)
  deleteItem(@Args() deleteItemArgs: ItemByIdArgs): Promise<ItemModel> {
    return this.itemsService.deleteItem(deleteItemArgs.id);
  }
}
