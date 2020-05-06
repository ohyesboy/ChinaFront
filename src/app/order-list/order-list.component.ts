import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/menu-item';
import { DataService } from '../data.service';
import { ObjectMapper } from "json-object-mapper";
@Component({
  selector: 'china-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  busy = true;
  @Input() backMode :Boolean;
  refreshTime = Date.now();
  constructor(private dataService: DataService) {
    setInterval(()=>{
        this.loadOrders()
        this.refreshTime = Date.now();
    },10000)
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(){
    this.busy = true;
    this.dataService.getOrders().then((data: any)=>{

      this.orders  = data;
      this.busy = false;

    })
  }

  addOrder(order: Order): void {

    this.busy = true;
    order.time = new Date();

    this.dataService.addOrder(order).then((newOrder: any)=>{
      this.orders.splice(0, 0, newOrder);

      this.busy = false;

    })
  }

  markOrderDone(order: Order){
    this.dataService.markDone(order.id).then((data: any)=>{
      this.loadOrders();

    })
  }

  clearDone(){
    this.dataService.clearDone().then(data=>{
      this.loadOrders();
    })
  }

}
