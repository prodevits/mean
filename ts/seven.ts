/*
The toPrecision method returns the string representation in exponential or fixed-point to the specified precision.
*/

let myNumber: number = 10.5679;

let s:string;
s=myNumber.toPrecision(1); // returns 1e+1
console.log(s);
s=myNumber.toPrecision(2); // returns 11
console.log(s);
s=myNumber.toPrecision(3); // returns 10.6
console.log(s);
s=myNumber.toPrecision(4); // returns 10.57
console.log(s);
