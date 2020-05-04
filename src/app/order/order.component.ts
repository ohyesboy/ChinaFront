import { Component, OnInit, Input } from '@angular/core';
import { SelectedItem, Order } from '../models/menu-item';

@Component({
  selector: 'china-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input() order: Order = new Order();
  @Input() viewMode = false;

}
