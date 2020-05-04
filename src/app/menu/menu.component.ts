import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MenuItem, SelectedItem, Size, MenuCate } from "../models/menu-item";
import { DataService } from '../data.service';

@Component({
  selector: 'china-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() selected: SelectedItem;
  @Output() emitter: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();
  cates: MenuCate[]

  /**
   *
   */
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getMenuCates().subscribe(data=>{
      this.cates = data as MenuCate[];
    })
  }

  selectItem(title: string, size: Size){
      this.selected =  {
        title : title,
        label :size.Desc,
        price : size.Price

      }

      this.emitter.emit(this.selected);
  }
}
