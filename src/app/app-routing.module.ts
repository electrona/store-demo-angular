import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreAddComponent } from './store/store-add/store-add.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { StoreUpdateComponent } from './store/store-update/store-update.component';


const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'add', component: StoreAddComponent },
  { path: 'store', component: StoreListComponent },
  { path: 'update/:id', component: StoreUpdateComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
