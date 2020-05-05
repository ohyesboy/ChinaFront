import { Component, ViewChild } from '@angular/core';
import { SelectedItem, Order } from './models/menu-item';
import { OrderListComponent } from './order-list/order-list.component';
import { DataService } from './data.service';

@Component({
  selector: 'china-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  }

  clear(){
    this.dataService.clearDone().then(data=>{
      this.orderList.loadOrders();
    })
  }
}
