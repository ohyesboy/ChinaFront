import { Component } from '@angular/core';
import { SelectedItem } from './models/menu-item';

@Component({
  selector: 'china-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "China";
  selected: SelectedItem ;

  color='red'
  do(){
      this.color='blue'
  }

  selectChanged(e: SelectedItem){
    this.selected = e;
  }
}
