import { Component, OnInit } from '@angular/core';
import { Item, Statuses, UpdateStockStatuses } from '@inventory/api-interfaces';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../../services/inventory.service';
import { evaluateStatus } from '../../../helpers/helpers';
import { ConfirmationDialogComponent } from '../../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'inventory-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css'],
})
export class OrderTableComponent implements OnInit {
  statuses = Statuses;

  dataSource!: MatTableDataSource<Item>;

  items$: Observable<any> = this.inventoryService.listItems();

  updatingAll!: boolean;

  allOnTheWayDisabled!: boolean;

  easterEgg!: boolean;

  displayedColumns: string[] = [
    'name',
    'unit',
    'amount',
    'on-the-way',
    'received',
  ];

  loading!: boolean;

  constructor(
    private dialog: MatDialog,
    private inventoryService: InventoryService
  ) {}

  async ngOnInit() {
    this.dataSource = new MatTableDataSource<Item>();
    await this.setItems();
  }

  async setItemToComing(item: Item) {
    const updatedItem: Item = {
      id: item.id,
      name: item.name,
      category: item.category,
      threshold: item.threshold,
      stock: item.stock,
      orderAmount: item.orderAmount,
      status: Statuses.ON_THE_WAY,
      unit: item.unit,
    };
    await this.inventoryService.updateItem(updatedItem).subscribe();
    if (!this.updatingAll) {
      await this.setItems();
    }
  }

  async removeItemFromOrderList(item: Item) {
    const updatedItem: Item = {
      id: item.id,
      name: item.name,
      category: item.category,
      threshold: item.threshold,
      stock: item.stock,
      orderAmount: item.orderAmount,
      status: evaluateStatus(Statuses.UNDETERMINED, item.stock, item.threshold),
      unit: item.unit,
    };
    await this.inventoryService.updateItem(updatedItem).subscribe();
    if (!this.updatingAll) {
      await this.setItems();
    }
  }

  async setAllItemsToComing() {
    this.updatingAll = true;
    this.loading = true;
    for (let item of this.dataSource.data) {
      await this.setItemToComing(item);
    }
    this.updatingAll = false;
    this.loading = false;
    await this.setItems();
  }

  onRemoveAllClick() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '600px',
      height: '300px',
      data: {
        titleText: 'You Sure??',
        bodyText:
          'Removing stuff is scary 👻 ill give you second to think about',
        cancelText: 'Ive made a terrible mistake 😱',
        approveText: 'I know what im doing 🙄',
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        try {
          await this.removeAllItemsFromOrderList();
        } catch (error) {
          console.error(error);
          //TODO notification service
        }
      }
    });
  }

  onAllComingClick() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '600px',
      height: '300px',
      data: {
        titleText: 'Really?? 🧐',
        bodyText: 'Did you really order all this? 🤨',
        cancelText: '... no 😒',
        approveText: 'Sure did 😏',
      },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        try {
          await this.setAllItemsToComing();
        } catch (error) {
          console.error(error);
          //TODO notification service
        }
      }
    });
  }

  async removeAllItemsFromOrderList() {
    this.updatingAll = true;
    this.loading = true;
    for (let item of this.dataSource.data) {
      await this.removeItemFromOrderList(item);
    }
    this.updatingAll = false;
    this.loading = false;
    await this.setItems();
  }

  checkAllOnTheWayDisabled() {
    const itemsNotOnTheWayCount = this.dataSource.data.filter(
      (item) => item.status !== Statuses.ON_THE_WAY
    ).length;
    this.allOnTheWayDisabled = !(itemsNotOnTheWayCount === 0);
  }

  easterEgger() {
    this.easterEgg = !this.easterEgg;
  }

  async setItems() {
    this.loading = true;
    await this.items$.subscribe((result) => {
      const itemsFront: Item[] = [];
      for (let item of result.data.listItems.filter(
        (item: Item) =>
          item.status === Statuses.ON_ORDER ||
          item.status === Statuses.ON_THE_WAY
      )) {
        itemsFront.push({
          ...item,
          updatedStockStatus: UpdateStockStatuses.UNCHANGED,
          updatedStockValue: item.stock,
        });
      }
      this.dataSource.data = itemsFront;
      this.updatingAll = false;
      this.loading = false;
      this.easterEgg = false;
      this.updatingAll = false;
      this.checkAllOnTheWayDisabled();
      this.loading = false;
    });
  }
}
