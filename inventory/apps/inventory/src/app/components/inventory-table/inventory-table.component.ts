import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@inventory/api-interfaces';
import { InventoryDataSource } from './inventory-data-source';
import { AddStuffComponent } from '../../dialogs/add-stuff/add-stuff.component';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../services/inventory.service';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';

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

  constructor(
    private dialog: MatDialog,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    let dataToDisplay = this.items;
    this.dataSource = new InventoryDataSource(dataToDisplay);
  }

  editStuff(item: Item) {
    this.dialog.open(AddStuffComponent, {
      disableClose: true,
      width: '500px',
      height: '600px',
      data: {
        title: 'Add Item to Compustuff',
        item: { ...item },
      },
    });
  }

  async deleteStuff(id: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      height: '300px',
      data: {
        titleText: 'Delete the Stuff !??!',
        bodyText: "Once you yeet the stuff it's gone forever",
        cancelText: 'Changed my mind',
        approveText: 'YEET IT!!',
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        try {
          await this.inventoryService
            .deleteItem(id)
            .subscribe(() => window.location.reload());
        } catch (error) {
          console.error(error);
          //TODO notification service
        }
      }
    });
  }
}
