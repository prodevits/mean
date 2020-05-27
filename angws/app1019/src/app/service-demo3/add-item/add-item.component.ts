import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @ViewChild("item",{static:true}) itemForm:NgForm;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }
  addItem(){ 
    console.log(this.itemForm.value);
    
    const {itemno,name,price,qty}=this.itemForm.value;   

    
    const item=new Item(itemno,name,price,qty);
    this.itemService.addItem(item);
    this.itemForm.reset();
    alert('item Added');
  }
}
