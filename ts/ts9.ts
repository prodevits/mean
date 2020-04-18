// optional parameter

function m1(name:string, age?:number,city?:string,salary?:number){
    console.log(name);
    console.log(age);
    console.log(city);
    console.log(salary);   
}
// Function Call 

m1("Rama",23,"Indore",12000);
console.log("-----------------");
m1("Rohan");
console.log("-----------------");
m1("Rita",18)