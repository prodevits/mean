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

}

class Circle implements Shape{
    constructor(private radius:number){}
    show():void{
        console.log("Circle");        
        console.log("Radius="+this.radius);
     
    }
    area():number{
        const a=Math.PI*this.radius*this.radius;
        return a;
    }
}

class App{
    // interface as function argument
   static printInfo(s:Shape):void{
        s.show();
        const a=s.area();
        console.log("Area="+a.toFixed(2));        
    }
//interface as function return type
    static max(s1:Shape,s2:Shape):Shape{
        if(s1.area()>s2.area())
            {
                return s1;
            }
        else{
            return s2;
        }
    }
}

let r1=new Rect(10,20);
let c1=new Circle(5);

App.printInfo(r1);
App.printInfo(c1);
let s=App.max(r1,c1);
console.log("---Bigger Shape---");
App.printInfo(s);
