import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MenuItem, SelectedItem, Size } from "../models/menu-item";

@Component({
  selector: 'china-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() selected: SelectedItem;
  @Output() emitter: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();
  items: MenuItem[] =[
    {
      title:"Egg roll",
      size:[
        {
          label: null,
          price:10
        }
      ]
    },
    {
      title:"Coke",
      size:[
        {
          label: "large",
          price:2.5
        },
        {
          label: "small",
          price:1.5
        }
      ]
    }
  ]

  ngOnInit(): void {
  }

  selectItem(title: string, size: Size){
      this.selected =  {
        title : title,
        label :size.label,
        price : size.price

      }

      this.emitter.emit(this.selected);
  }
}
