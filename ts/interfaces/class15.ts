// interface as function argument
//interface as function return type

interface Shape{
    area():number;
    show():void;
}
class Rect implements Shape{
    constructor(private l:number,private b:number){}
    show():void{
        console.log("Rectangle");
        console.log("Length="+this.l);
        console.log("Breadth="+this.b);        
    }
    area():number{
        return this.l*this.b;
    }

    showAll():void{
        this.show();
        const a=this.area();
        console.log("Area="+a);
        
    }
}

let r1=new Rect(10,20);

r1.showAll();
