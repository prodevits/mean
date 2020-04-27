class A{
    static x:number;
    y:number;  // non static or instance variable

    show():void{
        console.log("x="+A.x);        
        console.log("y="+this.y);        
    }
}

let a1=new A();
let a2=new A();
a1.show();
a2.show();
console.log("--------------------");
//a1.x=100;    //error : x is static
A.x=100;
a1.y=20;
a1.show();
a2.show();
console.log("--------------------");
A.x=500;
a2.y=50;
a1.show();
a2.show();

