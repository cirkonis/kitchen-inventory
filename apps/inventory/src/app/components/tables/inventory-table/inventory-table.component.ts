import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  Categories,
  Item,
  Statuses,
  UpdateStockStatuses,
} from '@inventory/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../../services/inventory.service';
import { ConfirmationDialogComponent } from '../../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { EditStuffComponent } from '../../../dialogs/edit-stuff/edit-stuff.component';
import { evaluateStatus } from '../../../helpers/helpers';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'inventory-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css'],
})
export class InventoryTableComponent implements OnInit {
  @Input() category!: Categories;

  @ViewChild('matTable') matTable!: MatTable<any>;

  items$: Observable<any> = this.inventoryService.listItems();

  updateStockStatuses = UpdateStockStatuses;

  statuses = Statuses;

  dataSource!: MatTableDataSource<Item>;

  updateAllDisabled!: boolean;

  addAllDisabled!: boolean;

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

  async ngOnInit() {
    this.dataSource = new MatTableDataSource<Item>();
    await this.setItems();
  }

  editStuff(item: Item) {
    const dialogRef = this.dialog.open(EditStuffComponent, {
      disableClose: true,
      width: '500px',
      height: '600px',
      data: {
        title: 'Add Item to Compustuff',
        item: { ...item },
      },
    });

    dialogRef.afterClosed().subscribe(() => this.setItems());
  }

  async deleteStuff(item: Item) {
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
      // TODO fix this mess
      if (result) {
        await this.inventoryService.deleteItem(item.id).subscribe();
        this.dataSource.data = this.dataSource.data.filter((value) => {
          return value.id != item.id;
        });
        this.matTable.renderRows();
        await this.setItems();
        // TODO sort out implementation with out reload
        window.location.reload();
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
      await this.setItems();
    }
  }

  private checkUpdateAllDisabled() {
    const changedItemsStockCount = this.dataSource.data.filter(
      (item) => item.updatedStockStatus !== UpdateStockStatuses.UNCHANGED
    ).length;

    this.updateAllDisabled = changedItemsStockCount < 2;
  }

  private checkAddAllDisabled() {
    const itemsToOrderCount = this.dataSource.data.filter(
      (item) => item.status === Statuses.UNDER
    ).length;
    this.addAllDisabled = !(itemsToOrderCount > 1);
  }

  async updateAllItemsStock() {
    this.updatingAll = true;
    this.loading = true;
    const itemsToUpdate = this.dataSource.data.filter(
      (item) => item.updatedStockStatus !== UpdateStockStatuses.UNCHANGED
    );
    for (let item of itemsToUpdate) {
      await this.updateStock(item);
    }
    this.updatingAll = false;
    this.loading = false;
    await this.setItems();
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
      await this.setItems();
    }
  }

  async addAllItemsToOrder() {
    this.updatingAll = true;
    this.loading = true;
    const itemsToAdd = this.dataSource.data.filter(
      (item) => item.status === Statuses.UNDER
    );
    for (let item of itemsToAdd) {
      this.addItemToOrderLIst(item);
    }
    this.updatingAll = false;
    this.loading = false;
    this.checkAddAllDisabled();
    await this.setItems();
  }

  async setItems() {
    this.loading = true;
    await this.items$.subscribe((result) => {
      const itemsFront: Item[] = [];
      for (let item of result.data.listItems.filter(
        (item: Item) => item.category === this.category
      )) {
        itemsFront.push({
          ...item,
          updatedStockStatus: UpdateStockStatuses.UNCHANGED,
          updatedStockValue: item.stock,
        });
      }
      this.dataSource.data = itemsFront;
      this.updateAllDisabled = true;
      this.checkAddAllDisabled();
      this.updatingAll = false;
      this.loading = false;
    });
  }
}
