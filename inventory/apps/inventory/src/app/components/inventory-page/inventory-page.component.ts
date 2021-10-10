import { Component, OnInit } from '@angular/core';
import { Categories, Item, Statuses } from '@inventory/api-interfaces';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'inventory-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css'],
})
export class InventoryPageComponent implements OnInit {
  items!: Item[];

  drinks!: Item[];
  snacks!: Item[];
  utilities!: Item[];
  orderList!: Item[];

  constructor(private inventoryService: InventoryService) {}

  async ngOnInit(): Promise<void> {
    await this.inventoryService.listItems().subscribe((result) => {
      this.items = result.data.listItems;

      this.drinks = this.items.filter(
        (item) => item.category === Categories.DRINK
      );

      this.snacks = this.items.filter(
        (item) => item.category === Categories.SNACK
      );

      this.utilities = this.items.filter(
        (item) => item.category === Categories.UTILITIY
      );

      this.orderList = this.items.filter(
        (item) => item.status === Statuses.ON_ORDER
      );
    });
  }
}
