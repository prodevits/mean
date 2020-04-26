//A method in class can call other method of same class using “this” with dot operator.

class Num{
    no:number;
    constructor(no:number){
        this.no=no;
    }
    show():void{
        console.log("No="+this.no);        
    }
    reverse():number{
        let x=this.no;
        let r=0,d;
        while(x!=0){
            d=x%10;
            r=r*10+d;
            x=Math.floor(x/10);                    
        }
        return r;
    }

    isPalinodrom(){
        return this.no==this.reverse();
    }
}

// let n1:Num=new Num(234);
let n1:Num=new Num(121);
n1.show();
let a=n1.reverse();
console.log(a);
if(n1.isPalinodrom()){
    console.log("Number is Palinodrom");    
}else{
    console.log("Number is not Palinodrom");
    
}