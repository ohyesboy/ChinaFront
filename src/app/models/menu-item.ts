import { Time } from '@angular/common';
import { Component } from '@angular/core';
export class MenuCate {
  Name: string;
  Items: MenuItem[];
}


export class MenuItem {
  Name: string;
  Variations: Size[]
}

export class Size {
  Desc: string;
  Price: number
}

export class SelectedItem {
  title: string;
  label: string;
  price: number;
  count: number = 1;


}


export class Order {
  items: SelectedItem[] = [];
  time: Date
  CustomerName:string


  getTotal(){
    var total = 0;
    this.items.forEach(x=>total+=x.price * x.count);
    return total;
    //this.total = total;
  }

  addItem(e: SelectedItem){
    var found = this.items.find(x=>x.title == e.title);

    if(found)
    {
      found.count++;
    }else{
      this.items.push(e);
    }


  }
}
