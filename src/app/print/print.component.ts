import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Order } from '../models/menu-item';

@Component({

  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  order: Order = new Order();


  constructor(private route:ActivatedRoute,private dataService: DataService) {
    var id = route.snapshot.paramMap.get('id');
    dataService.getOrder(id).then(data=> this.order = data as Order)
   }

  ngOnInit(): void {
  }

}
