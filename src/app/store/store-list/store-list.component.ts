import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from 'src/app/model/store.model';
import { StoreService } from 'src/app/service/store.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

   //storesInfo: Observable<ApiResponse>;
   stores: Observable<any> | undefined;
  
  constructor(private storeService: StoreService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          $('#example').DataTable();
      });
      },2000);
      
    }
/*
    this.myService.getConfig().subscribe(res => {
      console.log(res);
      this.data = res;
   });
  */
  ngOnInit() {
    let result:any;
    this.stores = this.storeService.getStore();
    this.stores.subscribe(data => {result = data});

    console.log( 'StoresInfo :', result);
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }

  deleteStore(id: number) {
    this.storeService.deleteStore(id)
      .subscribe(
        data => {
          console.log(data);
          this.stores = this.storeService.getStore();
        },
        error => console.log(error));
  }

  updateStore(id: number){
    this.router.navigate(['update', id]);
  }


}
