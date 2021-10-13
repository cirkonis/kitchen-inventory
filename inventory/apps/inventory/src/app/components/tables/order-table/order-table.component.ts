import { Component, Input, OnInit } from '@angular/core';
import { Item, Statuses } from '@inventory/api-interfaces';
import { InventoryDataSource } from '../inventory-data-source';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../../../services/inventory.service';
import { evaluateStatus } from '../../../helpers/helpers';
import { ConfirmationDialogComponent } from '../../../dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'inventory-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css'],
})
export class OrderTableComponent implements OnInit {
  @Input() items!: Item[];

  statuses = Statuses;

  dataSource!: InventoryDataSource;

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

  ngOnInit(): void {
    this.easterEgg = false;
    this.updatingAll = false;
    this.loading = false;
    this.checkAllOnTheWayDisabled();
    let dataToDisplay = this.items;
    this.dataSource = new InventoryDataSource(dataToDisplay);
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
      window.location.reload();
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
      window.location.reload();
    }
  }

  setAllItemsToComing() {
    this.updatingAll = true;
    this.loading = true;
    for (let item of this.items) {
      this.setItemToComing(item);
    }
    this.updatingAll = false;
    this.loading = false;
    window.location.reload();
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
          this.removeAllItemsFromOrderList();
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
          this.setAllItemsToComing();
        } catch (error) {
          console.error(error);
          //TODO notification service
        }
      }
    });
  }

  removeAllItemsFromOrderList() {
    this.updatingAll = true;
    this.loading = true;
    for (let item of this.items) {
      this.removeItemFromOrderList(item);
    }
    this.updatingAll = false;
    this.loading = false;
    window.location.reload();
  }

  checkAllOnTheWayDisabled() {
    const itemsNotOnTheWayCount = this.items.filter(
      (item) => item.status !== Statuses.ON_THE_WAY
    ).length;
    console.log(itemsNotOnTheWayCount);
    this.allOnTheWayDisabled = !(itemsNotOnTheWayCount > 1);
  }

  easterEgger() {
    this.easterEgg = !this.easterEgg;
  }
}
