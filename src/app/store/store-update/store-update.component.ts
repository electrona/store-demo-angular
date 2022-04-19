import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/model/store.model';
import { StoreService } from 'src/app/service/store.service';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-store-update',
  templateUrl: './store-update.component.html',
  styleUrls: ['./store-update.component.css']
})
export class StoreUpdateComponent implements OnInit {

  id: number = 0;
  store: Store = new Store;
  apiResponse: ApiResponse = new ApiResponse;

  constructor(private route: ActivatedRoute,private router: Router,
    private storeService: StoreService) { }

  ngOnInit() {
    this.store = new Store();

    this.id = this.route.snapshot.params['id'];
    this.storeService.getStoreById(this.id)
      .subscribe(data => {
        console.log(data)
        this.store = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.storeService.updateStore(this.id, this.store)
      .subscribe(data => console.log(data), error => console.log(error));
    this.store = new Store();
    this.router.navigate(['/store']);
    }

  
  list(){
    this.router.navigate(['store']);
  }
}