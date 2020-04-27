// class member & access modifier

class Demo{
    x:string="Ramesh";  // default is public
    private y:string="Rina";
    protected z:string="Sohan";

    show():void{
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);        
    }
}


let obj=new Demo();
obj.show();
console.log(obj.x);
console.log(obj.y); //Error
console.log(obj.z); //Error

