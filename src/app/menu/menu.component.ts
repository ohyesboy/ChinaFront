import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { MenuItem, SelectedItem, Size, MenuCate } from "../models/menu-item";
import { DataService } from '../data.service';

@Component({
  selector: 'china-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() filter:string

  @Output() onSelectItem: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();
  cates: MenuCate[]


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMenuCates().then(data=>{
      this.cates = data as MenuCate[];
    }).catch(reason=>{
      console.log("!!!!!!!!" + reason)
    })
  }

  selectItem(title: string, size: Size){
      var selected = new SelectedItem();
      selected.title = title;
      selected.label = size.Desc;
      selected.price = size.Price;

      this.onSelectItem.emit(selected);
  }

  filterItems(items: MenuItem[]): MenuItem[]{
    if(!this.filter)
      return items;
    var ret = items.filter(x=>x && x.Name.toLowerCase().indexOf(this.filter.toLowerCase())>-1);
    return ret;
  }
}
