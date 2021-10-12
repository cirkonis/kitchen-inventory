import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AppRoutingModule } from './app-routing.module';
import { InventoryService } from './services/inventory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryPageComponent } from './components/inventory-page/inventory-page.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { AddStuffComponent } from './dialogs/add-stuff/add-stuff.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FullItemFormComponent } from './dialogs/full-item-form/full-item-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { EditStuffComponent } from './dialogs/edit-stuff/edit-stuff.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    InventoryPageComponent,
    InventoryTableComponent,
    OrderTableComponent,
    AddStuffComponent,
    FullItemFormComponent,
    EditStuffComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
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
    MatDialog,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
