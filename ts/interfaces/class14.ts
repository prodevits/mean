interface X{
    hello():void ;
   }

class Y implements X{
   hello():void{
           console.log("Hello");
   }
}

let obj1:Y=new Y();
obj1.hello();

// declare varibale of interface X and assign object of Y

let obj2:X=new Y();
obj2.hello();

