import { Component, OnInit } from '@angular/core';
// import { InventoryService } from '../../services/inventory.service';
import { Item, Categories, Units, Statuses } from '@inventory/api-interfaces';

@Component({
  selector: 'inventory-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  items!: Item[];

  getItem!: Item;

  createItem: Item = {
    id: '400',
    name: 'test',
    stock: 1000,
    orderAmount: 2000,
    category: Categories.SNACK,
    threshold: 1500,
    status: Statuses.UNDER,
    unit: Units.DOUBLE,
  };

  updateItem: Item = {
    id: '400',
    name: 'test-update',
    stock: 1000,
    orderAmount: 2002,
    category: Categories.DRINK,
    threshold: 1500,
    status: Statuses.UNDER,
    unit: Units.DOUBLE,
  };

  // constructor(private inventoryService: InventoryService) {}

  async ngOnInit(): Promise<void> {
    // this.inventoryService.listItems().subscribe((result) => {
    //   this.items = result.data.listItems;
    //   console.log('got all items');
    //   console.log(this.items);
    // });
    //
    // await this.inventoryService
    //   .createItem(this.createItem)
    //   .subscribe((result) => {
    //     console.log('created item');
    //     console.log(result.data.createItem);
    //   });
    //
    // await this.inventoryService
    //   .getItem(this.createItem.id)
    //   .subscribe((result) => {
    //     console.log('get item');
    //     this.getItem = result.data.getItem;
    //   });
    //
    // await this.inventoryService
    //   .updateItem(this.updateItem)
    //   .subscribe((result) => {
    //     console.log('update item');
    //     console.log(result.data.updateItem);
    //   });
    //
    // await this.inventoryService
    //   .deleteItem(this.createItem.id)
    //   .subscribe((result) => {
    //     console.log('delete item');
    //     console.log(result.data.deleteItem);
    //   });
  }
}
