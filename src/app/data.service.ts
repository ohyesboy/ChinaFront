import { Injectable } from '@angular/core';
import { MenuCate } from './models/menu-item';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getMenuCates(){

    return this.http.get("assets/chinaExpress.json").toPromise()

    .catch(reason=>{
      console.log(reason.status)
      return Promise.reject("blabla")
    });


  }
}
