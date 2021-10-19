import { Component, OnInit } from '@angular/core';
import { Categories, Item, Statuses } from '@inventory/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AddStuffComponent } from '../../dialogs/add-stuff/add-stuff.component';

@Component({
  selector: 'inventory-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.css'],
})
export class InventoryPageComponent implements OnInit {
  categories = Categories;

  loading!: boolean;

  constructor(public dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {}

  async addStuff() {
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

    this.dialog.open(AddStuffComponent, {
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
