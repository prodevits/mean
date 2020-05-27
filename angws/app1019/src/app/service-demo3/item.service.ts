import { Item } from "./item.model";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn:'root'})
export class ItemService{
    private items:Item[]=[new Item(1,"Mobile",8897.5,1),new Item(2,"Cable",123.9,5)];
    onItemsChange:EventEmitter<Item[]>=new EventEmitter<Item[]>();
    
    getItems(){
        return  Object.assign([],this.items);
    }

    addItem(item:Item){
        this.items.push(item);
        this.onItemsChange.emit(this.items);
    }
    removeItem(itemno){
        const i=this.items.findIndex( item=> item.itemno==itemno);
        this.items.splice(i,1);
        this.onItemsChange.emit(this.items);
    }
    getTotal(){
        const amounts=this.items.map( item=>item.amount); 
        
        const t=amounts.reduce((a,b)=>a+b);

        
        return t;
    }
}