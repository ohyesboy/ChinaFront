import { Component, ViewChild, OnInit } from '@angular/core';
import { SelectedItem, Order } from '../models/menu-item';
import { OrderListComponent } from '../order-list/order-list.component';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';
@Component({

  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  filter = "";
  order: Order = new Order();
  @ViewChild(OrderListComponent) orderList:OrderListComponent;

  constructor(private dataService: DataService) {

  }

  selectChanged(e: SelectedItem){
    this.order.addItem(e)

  }

  addOrder(){
    this.orderList.addOrder(this.order);
    this.order = new Order();
    var x = document.getElementById("myAudio") as any;
    x.setAttribute("src","/assets/Alarm02.wav");
    x.play();
  }

}
