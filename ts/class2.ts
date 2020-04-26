class Student{
    rollno:number=1;
    name:string;

    show():void{
        console.log('Rollno : '+this.rollno);
        console.log('Name : '+this.name);
    }    
}

let s1:Student=new Student();

s1.show();  // name has default value : undefined & rollno has default value : 1
console.log("-----------------------");

// we can access object properties using dot operator
console.log(s1.rollno);
console.log(s1.name);
console.log("----------set Data -------------");
// set data for properties
s1.rollno=11122;
s1.name='Aman';
//s1.age=23;  //Error : age not defined in class
s1.show();

