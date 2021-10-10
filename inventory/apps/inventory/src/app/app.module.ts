import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { TestComponent } from './components/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { InventoryService } from './services/inventory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InventoryPageComponent,
    InventoryTableComponent,
    OrderTableComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:3333/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
    InventoryService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
