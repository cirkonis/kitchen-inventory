import { Component, Inject, OnInit } from '@angular/core';
import { Item } from '@inventory/api-interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InventoryService } from '../../services/inventory.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'inventory-add-stuff',
  templateUrl: './add-stuff.component.html',
  styleUrls: ['./add-stuff.component.css'],
})
export class AddStuffComponent implements OnInit {
  item!: Item;

  createdItem!: Item;

  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; item: Item },
    private dialogRef: MatDialogRef<AddStuffComponent>,
    private inventoryService: InventoryService
  ) {}
  ngOnInit(): void {
    this.item = this.data.item;
  }

  async itemPayloadReceived($event: Partial<Item>) {
    this.loading = true;
    const { category, name, orderAmount, status, stock, threshold, unit } = {
      ...$event,
    };
    const itemPayload: Item = {
      id: uuidv4(),
      name: name!.toString(),
      category: category!,
      stock: +stock!,
      unit: unit!.toString(),
      threshold: +threshold!,
      orderAmount: +orderAmount!,
      status: status!,
    };
    this.inventoryService
      .createItem(itemPayload)
      .subscribe(() => window.location.reload());
  }
}
