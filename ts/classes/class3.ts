class Student{
    rollno:number;
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

let s1:Student=new Student(101,"Rohan");
s1.show();  

let s2:Student;
s2=new Student(102,"Rita");
s2.show();