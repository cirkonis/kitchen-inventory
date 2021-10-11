import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@inventory/api-interfaces';
import { InventoryDataSource } from './inventory-data-source';
import { AddStuffComponent } from '../../dialogs/add-stuff/add-stuff.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'inventory-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
})
export class InventoryTableComponent implements OnInit {
  @Input() items!: Item[];

  dataSource!: InventoryDataSource;

  displayedColumns: string[] = [
    'name',
    'stock',
    'unit',
    'threshold',
    'amount',
    'status',
    'order',
    'update',
    'edit',
    'delete',
  ];

  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {
    let dataToDisplay = this.items;
    this.dataSource = new InventoryDataSource(dataToDisplay);
  }

  editStuff(item: Item) {
    this.dialogRef.open(AddStuffComponent, {
      disableClose: true,
      width: '500px',
      height: '600px',
      data: {
        title: 'Add Item to Compustuff',
        item: { ...item },
      },
    });
  }
}
