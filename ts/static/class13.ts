class B{
    static x:number;
    y:number;  // non static or instance variable

    show():void{
        console.log("x="+B.x);        
        console.log("y="+this.y);        
    }

    static display():void{
        console.log("x="+B.x);        
     //console.log("y="+this.y);  //Error 

    }
}

let b1=new B();
b1.y=10;
B.x=100;
b1.show();
B.display();