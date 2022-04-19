import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Store } from '../model/store.model';
import { environment } from 'src/environments/environment';

import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/store';
  private result:any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'      
      //'Content-Type': 'application/x-www-form-urlencoded',
      
    }),
  };
  
   headers : HttpHeaders =  new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 /* 
  getStore() : Observable<ApiResponse> {
     return this.http.get<ApiResponse>(this.baseUrl);
  }
*/

  getStore() : Observable<Store[]> {
    return this.http.get<Store[]>(this.baseUrl);
     
  }

  getStoreById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  addStore(store: Store): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, store);
  }

  updateStore(id: number, store: Store): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + store.id, store);
  }

  deleteStore(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}