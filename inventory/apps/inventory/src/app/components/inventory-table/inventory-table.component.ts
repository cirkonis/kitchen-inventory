import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@inventory/api-interfaces';
import { InventoryDataSource } from './inventory-data-source';

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

  ngOnInit(): void {
    let dataToDisplay = this.items;
    this.dataSource = new InventoryDataSource(dataToDisplay);
  }
}
