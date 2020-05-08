import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/menu-item';
import { DataService } from '../data.service';
import { ObjectMapper } from "json-object-mapper";
import { Time } from '@angular/common';
import { TimeoutError } from 'rxjs';
@Component({
  selector: 'china-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];
  busy = true;
  lastUpdate: Date;
  timer: any
  @Input() backMode :Boolean;
  refreshTime: any;
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.loadOrders(false);
    this.timer = setInterval(()=>{
        this.loadOrders(true)
    },6000)
  }
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  loadOrders(refresh: boolean = false){
    this.busy = true;

    if(!refresh){
      this.dataService.getOrders().then((data: any)=>{

        this.orders  = data.orders;
        this.busy = false;
        this.lastUpdate =  data.time
      })
    }
    else{
      this.dataService.refresh(this.lastUpdate).then((data: any)=>{
        this.busy = false;

        if(data.orders != null)
          this.orders  = data.orders;
          this.lastUpdate = data.time

      })
    }

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
