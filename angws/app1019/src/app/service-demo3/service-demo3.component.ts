import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-service-demo3',
  templateUrl: './service-demo3.component.html',
  styleUrls: ['./service-demo3.component.css']
})
export class ServiceDemo3Component implements OnInit {
  items:Item[];
  constructor(private itemService:ItemService) { 
    itemService.onItemsChange.subscribe( data=> this.items=data);
  }
  ngOnInit() {
    this.items=this.itemService.getItems();
  }
  totalAmount(){
   return  this.itemService.getTotal();
  }


}
