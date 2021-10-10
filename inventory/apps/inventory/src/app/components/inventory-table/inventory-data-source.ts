import { DataSource } from '@angular/cdk/collections';
import { Item } from '@inventory/api-interfaces';
import { Observable, ReplaySubject } from 'rxjs';

export class InventoryDataSource extends DataSource<Item> {
  private _dataStream = new ReplaySubject<Item[]>();

  constructor(initialData: Item[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Item[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Item[]) {
    this._dataStream.next(data);
  }
  // addData() {
  //   this.dataToDisplay = [...this.dataToDisplay];
  //   this.dataSource.setData(this.dataToDisplay);
  // }
  //
  // removeData() {
  //   this.dataToDisplay = this.dataToDisplay.slice(0, -1);
  //   this.dataSource.setData(this.dataToDisplay);
  // }
}
