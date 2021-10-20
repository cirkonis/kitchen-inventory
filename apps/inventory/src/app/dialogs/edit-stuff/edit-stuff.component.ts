import { Component, Inject, OnInit } from '@angular/core';
import { Item } from '@inventory/api-interfaces';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'inventory-edit-stuff',
  templateUrl: './edit-stuff.component.html',
  styleUrls: ['./edit-stuff.component.css'],
})
export class EditStuffComponent implements OnInit {
  item!: Item;

  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; item: Item },
    private dialogRef: MatDialogRef<EditStuffComponent>,
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
      id: this.item.id!,
      name: name!.toString(),
      category: category!,
      stock: +stock!,
      unit: unit!.toString(),
      threshold: +threshold!,
      orderAmount: +orderAmount!,
      status: status!,
    };
    await this.inventoryService.updateItem(itemPayload).subscribe();
    this.loading = false;
    this.dialogRef.close();
  }
}
