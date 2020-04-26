class TwoNumber{
n1:number;
n2:number;
sum():number{
	return this.n1+this.n2;
}
div():number{
	return this.n1/this.n2;
}
display():void{
console.log("No1="+this.n1);
console.log("No2="+this.n2);
}
}

var tnObj=new TwoNumber();

tnObj.n1=100
tnObj.n2=20
tnObj.display()

var v1=tnObj.sum();
var v2=tnObj.div();console.log('Sum='+v1);
console.log('Div='+v2);
