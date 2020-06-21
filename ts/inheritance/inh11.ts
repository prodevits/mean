class Person{
    // protected name:string;
    // protected age:number;

    private name:string;
    private age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }    

    show():void{       
        console.log(this.name); 
        console.log(this.age);
    }

}

class Student extends Person{
    rollno:number;
    fees:number;

    constructor(rollno:number,name:string,age:number,fees:number){
        super(name,age);
        this.rollno=rollno;
        this.fees=fees;      
    }
    show():void{    
        console.log(this.rollno);            
        // console.log(this.name);
        // console.log(this.age);
        super.show();
        console.log(this.fees);
            
    }
}


// let p=new Person("Rohan",34);
// console.log(p.name);


let s:Student=new Student(101,"Aman",22,45000);
s.show();

