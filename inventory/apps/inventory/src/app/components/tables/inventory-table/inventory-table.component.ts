import { Component, Input, OnInit } from '@angular/core';
import { Item, Statuses, UpdateStockStatuses } from '@inventory/api-interfaces';
import { InventoryDataSource } from '../inventory-data-source';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../../services/inventory.service';
import { ConfirmationDialogComponent } from '../../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { EditStuffComponent } from '../../../dialogs/edit-stuff/edit-stuff.component';
import { evaluateStatus } from '../../../helpers/helpers';

@Component({
  selector: 'inventory-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
})
export class InventoryTableComponent implements OnInit {
  @Input() items!: Item[];

  updateStockStatuses = UpdateStockStatuses;

  statuses = Statuses;

  dataSource!: InventoryDataSource;

  updateAllDisabled!: boolean;

  addAllDisabled: any;

  updatingAll!: boolean;

  loading!: boolean;

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
    this.updateAllDisabled = true;
    this.checkAddAllDisabled();
    this.updatingAll = false;
    this.loading = false;
    let dataToDisplay = this.items;
    this.dataSource = new InventoryDataSource(dataToDisplay);
  }

  editStuff(item: Item) {
    this.dialog.open(EditStuffComponent, {
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
        titleText: 'Delete the Stuff !??!  😬',
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

  adjustStock(item: Item, adjustment: number) {
    const value = item.updatedStockValue! + adjustment;
    if (value >= 0) {
      item.updatedStockValue = value;
    }
    this.updateStockStatus(item);
    this.checkUpdateAllDisabled();
    this.checkAddAllDisabled();
  }

  updateStockStatus(item: Item) {
    switch (true) {
      case item.stock < item.updatedStockValue!:
        item.updatedStockStatus = UpdateStockStatuses.INCREASED;
        break;
      case item.stock > item.updatedStockValue!:
        item.updatedStockStatus = UpdateStockStatuses.REDUCED;
        break;
      case item.stock === item.updatedStockValue!:
        item.updatedStockStatus = UpdateStockStatuses.UNCHANGED;
        break;
    }
  }

  async updateStock(item: Item) {
    const updatedItem: Item = {
      id: item.id,
      name: item.name,
      category: item.category,
      threshold: item.threshold,
      stock: +item.updatedStockValue!,
      orderAmount: item.orderAmount,
      status: evaluateStatus(
        item.status,
        +item.updatedStockValue!,
        item.threshold
      ),
      unit: item.unit,
    };
    await this.inventoryService.updateItem(updatedItem).subscribe();
    if (!this.updatingAll) {
      window.location.reload();
    }
  }

  private checkUpdateAllDisabled() {
    const changedItemsStockCount = this.items.filter(
      (item) => item.updatedStockStatus !== UpdateStockStatuses.UNCHANGED
    ).length;

    this.updateAllDisabled = changedItemsStockCount < 2;
  }

  private checkAddAllDisabled() {
    const itemsToOrderCount = this.items.filter(
      (item) => item.status === Statuses.UNDER
    ).length;
    this.addAllDisabled = itemsToOrderCount > 1;
  }

  updateAllItemsStock() {
    this.updatingAll = true;
    this.loading = true;
    const itemsToUpdate = this.items.filter(
      (item) => item.updatedStockStatus !== UpdateStockStatuses.UNCHANGED
    );
    for (let item of itemsToUpdate) {
      this.updateStock(item);
    }
    this.updatingAll = false;
    this.loading = false;
    window.location.reload();
  }

  async addItemToOrderLIst(item: Item) {
    const updatedItem: Item = {
      id: item.id,
      name: item.name,
      category: item.category,
      threshold: item.threshold,
      stock: item.stock,
      orderAmount: item.orderAmount,
      status: Statuses.ON_ORDER,
      unit: item.unit,
    };
    await this.inventoryService.updateItem(updatedItem).subscribe();
    if (!this.updatingAll) {
      window.location.reload();
    }
  }

  addAllItemsToOrder() {
    this.updatingAll = true;
    this.loading = true;
    const itemsToAdd = this.items.filter(
      (item) => item.status === Statuses.UNDER
    );
    for (let item of itemsToAdd) {
      this.addItemToOrderLIst(item);
    }
    this.updatingAll = false;
    this.loading = false;
    this.checkAddAllDisabled();
    window.location.reload();
  }
}
