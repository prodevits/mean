export class Item{
    constructor(private _itemno:number,private _name:string,private _price:number,private _qty:number){}
    get itemno(){
        return this._itemno;
    }
    get name(){
        return this._name;
    }
    get price(){
        return this._price;
    }
    get qty(){
        return this._qty;
    }

    get amount(){
        return this._price*this._qty;
    }
}