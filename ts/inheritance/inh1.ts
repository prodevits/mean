class A{
    n1:number;
    n2:number;
    constructor(n1:number,n2:number){
        this.n1=n1;
        this.n2=n2;
    }

    show():void{       
        console.log("No1="+this.n1); 
        console.log("No2="+this.n2);
    }

    add():number{
        return this.n1+this.n2;
    }

    sub():number{
        return this.n1-this.n2;
    }
}

class B extends A{
    div():number{
        return this.n1/this.n2;
    }

    multiply():number{
        return this.n1/this.n2;
    }
  
    show():void{   
        console.log("Hello");
        super.show();
    }
}


let b=new B(100,20);
b.show();
let s=b.add();
console.log("Add="+s);
let m=b.sub();
console.log("Sub="+m);

let d=b.div();
console.log("Division="+d);

let p=b.multiply();
console.log("Multiplication="+p);




