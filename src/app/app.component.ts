import { Component } from '@angular/core';
import { SelectedItem, Order } from './models/menu-item';

@Component({
  selector: 'china-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "China";
  order: Order = new Order();


  color='red'
  do(){
      this.color='blue'
  }

  selectChanged(e: SelectedItem){
    this.order.addItem(e)

  }

}
