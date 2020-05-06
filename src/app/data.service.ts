import { Injectable } from '@angular/core';
import { MenuCate, Order } from './models/menu-item';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = environment.url
  constructor(private http:HttpClient) { }

  getMenuCates(){
    return this.http.get("assets/chinaExpress.json")
    .toPromise()
    .catch(reason=>{
      console.log(reason.status)
    });
  }

  getOrder(id){

    var url = this.apiUrl+"Orders/"+id;
    return this.http.get(url)
      .toPromise().then((data: any)=>{
      var order  = this.mapType(data, Order)
      return order;

    });
  }

  getOrders(){

    var url = this.apiUrl+"Orders";
    //url = "assets/orders.json"
    return this.http.get(url)
    .toPromise().then((data: any)=>{

      var orders  = data.map(x=>this.mapType(x, Order))
      return orders

    }).catch(reason=>console.log(reason))
  }

  addOrder(order: Order){
    return this.http.post( this.apiUrl + "Orders", order)
    .toPromise().then(x=>this.mapType(x, Order));
  }

  clearDone(){
    return this.http.get( this.apiUrl + "Orders/clearDone")
    .toPromise();
  }

  markDone(id: number){
    return this.http.get( this.apiUrl + "Orders/done/"+id)
    .toPromise();
  }

  mapType<T>(data, TCreator: { new (): T; }):T{
    var o = new TCreator();
    Object.assign(o, data);
    return o;
  }
}
