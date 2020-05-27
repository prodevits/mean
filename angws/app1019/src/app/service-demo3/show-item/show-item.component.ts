import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: '[app-show-item]',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.css']
})
export class ShowItemComponent implements OnInit {

  @Input() item:Item;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
  }
  remove(){
    this.itemService.removeItem(this.item.itemno);
  }
}
