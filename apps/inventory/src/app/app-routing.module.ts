import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { OrderTableComponent } from './components/tables/order-table/order-table.component';
import { AddStuffComponent } from './dialogs/add-stuff/add-stuff.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'inventory', component: InventoryPageComponent },
  { path: 'order', component: OrderTableComponent },
  { path: 'test', component: AddStuffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
