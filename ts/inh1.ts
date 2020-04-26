class A{
    protected x=1;
}

class B extends A{
    m1():void{
        console.log(this.x);
        
    }
}

let b=new B();
b.m1();

