import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreAddComponent } from './store/store-add/store-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreService } from './service/store.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreUpdateComponent } from './store/store-update/store-update.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    StoreAddComponent,
    StoreListComponent,
    StoreUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
