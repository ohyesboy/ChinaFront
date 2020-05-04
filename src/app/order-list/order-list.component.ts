import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../models/menu-item';

@Component({
  selector: 'china-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  orders: Order[] = [];

}
