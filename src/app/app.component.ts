import { Component, ViewChild } from '@angular/core';
import { SelectedItem, Order } from './models/menu-item';
import { OrderListComponent } from './order-list/order-list.component';

@Component({
  selector: 'china-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  filter = "";
  order: Order = new Order();
  @ViewChild(OrderListComponent) orderList:OrderListComponent;


  selectChanged(e: SelectedItem){
    this.order.addItem(e)

  }

  addOrder(){
    this.orderList.orders.push(this.order);
    this.order.time = new Date()
    this.order = new Order();

  }
}
