
import { StoreService } from 'src/app/service/store.service';
import { StoreInfo } from 'src/app/model/store.model';

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {Router} from '@angular/router';


@Component({
  selector: 'add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class CreateStoreComponent implements OnInit {

  storeInfo: StoreInfo = new StoreInfo();
  submitted = false;

  constructor(private storeService: StoreService,
    private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.submitted = true;
    this.storeService.addStore(this.storeInfo)
    .subscribe(data => console.log(data), error => console.log(error));
    this.storeInfo = new StoreInfo();
    this.router.navigate(['/stores']);
  }

 
}

 

  


  
    
  
  


