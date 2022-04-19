
import { StoreService } from 'src/app/service/store.service';
import { Store } from 'src/app/model/store.model';

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from '@angular/router';


@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {

  store: Store = new Store();
  submitted = false;

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.storeService.addStore(this.store)
    .subscribe(data => console.log(data), error => console.log(error));
    this.store = new Store();
    this.router.navigate(['/store']);
  }

 
}

 

  


  
    
  
  


