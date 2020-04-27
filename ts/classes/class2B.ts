class Student{
    rollno:number=1;
    name:string;

    constructor(rollno:number,name:string){
        this.rollno=rollno;
        this.name=name;
    }
    show():void{
        console.log('Rollno : '+this.rollno);
        console.log('Name : '+this.name);
    }    
}

let s1:Student=new Student(101,"Raman");
let s2:Student=new Student(102,"Rita");

s1.show();
s2.show();

