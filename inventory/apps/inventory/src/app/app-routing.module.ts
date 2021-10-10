import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { OrderTableComponent } from './components/order-table/order-table.component';

const routes: Routes = [
  { path: '', component: InventoryPageComponent },
  { path: 'order', component: OrderTableComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
