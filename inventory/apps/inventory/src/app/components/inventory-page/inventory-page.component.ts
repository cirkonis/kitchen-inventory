import { Component, OnInit } from '@angular/core';
import {
  Categories,
  Item,
  Statuses,
  UpdateStockStatuses,
} from '@inventory/api-interfaces';
import { InventoryService } from '../../services/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { AddStuffComponent } from '../../dialogs/add-stuff/add-stuff.component';

@Component({
  selector: 'inventory-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css'],
})
export class InventoryPageComponent implements OnInit {
  items: Item[] = [];

  drinks!: Item[];
  snacks!: Item[];
  utilities!: Item[];
  orderList!: Item[];

  loading!: boolean;

  constructor(
    private inventoryService: InventoryService,
    public dialogRef: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    await this.setItems();
  }

  async setItems() {
    this.loading = true;
    await this.inventoryService.listItems().subscribe((result) => {
      for (let item of result.data.listItems) {
        this.items.push({
          ...item,
          updatedStockStatus: UpdateStockStatuses.UNCHANGED,
          updatedStockValue: item.stock,
        });
      }

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
        (item) =>
          item.status === Statuses.ON_ORDER ||
          item.status === Statuses.ON_THE_WAY
      );
    });
    this.loading = false;
  }

  addStuff() {
    const emptyItem: Item = {
      id: '',
      name: '',
      stock: 0,
      threshold: 0,
      orderAmount: 0,
      unit: '',
      status: Statuses.UNDETERMINED,
      category: Categories.UNDETERMINED,
    };

    this.dialogRef.open(AddStuffComponent, {
      disableClose: true,
      width: '500px',
      height: '600px',
      data: {
        title: 'Add Item to Compustuff',
        item: { ...emptyItem },
      },
    });
  }
}
