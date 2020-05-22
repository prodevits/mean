import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input("item") item:{id:number,name:String,price:number,qty:number};

  constructor() { }

  ngOnInit() {
  }

  amount(){
   return this.item.price*this.item.qty;
  }
}
