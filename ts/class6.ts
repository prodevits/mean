//Array of objects
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    show():void{
        console.log("Name="+this.name);
        console.log("Age="+this.age);
    }

}


let ps:Person[]=[];
const p1=new Person("Aman",23);
const p2=new Person("Rina",21);
ps.push(p1);
ps.push(p2);

console.log(ps);
console.log("-------------");
ps.forEach(function(p){
    p.show();
});

