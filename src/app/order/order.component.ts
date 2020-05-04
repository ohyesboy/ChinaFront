import { Component, OnInit, Input } from '@angular/core';
import { SelectedItem, Order, MenuItem } from '../models/menu-item';

@Component({
  selector: 'china-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input() order: Order = new Order();
  @Input() viewMode = false;

  remove(item: SelectedItem){
    this.order.items.splice(this.order.items.indexOf(item),1)
  }
}
