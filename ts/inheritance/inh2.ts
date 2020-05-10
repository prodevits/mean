//Super class
class Person{
    private name:string;
    private age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

   show():void{
        console.log("Name="+this.name);
        console.log("Age="+this.age);
    }
}


//Sub Class
class Employee extends Person{
    salary:number;
    city:string;
    constructor(name:string,age:number,city:string,salary:number){
        super(name,age);
        this.city=city;
        this.salary=salary;
    }
    show():void{
        super.show();
        console.log("City="+this.city);
        console.log("Salary="+this.salary);
    }
}

let e1=new Employee("aman",22,"indore",12000);
e1.show();