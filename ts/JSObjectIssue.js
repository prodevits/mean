// Issue in JS object: attribute can be added dynamically

class Emp{

    constructor(id,name){
        this.id=id;
        this.name=name;
    }
}

let e1=new Emp(101,"Aman");
let e2=new Emp(102,"Rita")
e1.age=23;
e2.city="indore";

console.log(e1);
console.log(e2);

