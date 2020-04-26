class Student{
    rollno:number;
    name:string;
    course:string;
    marks:number;
    constructor(rollno:number,name:string,course:string,marks:number){
        this.rollno=rollno;
        this.name=name;
        this.course=course;
        this.marks=marks;
    }
    show():void{
        console.log("Rollno="+this.rollno);
        console.log("Name="+this.name);
        console.log("Course="+this.course);
        console.log("Marks="+this.marks);
    }
    result(){
        if(this.marks>40)
        console.log("Result=FAIL");
        else 
        console.log("Result=PASS");        
    }
    }
    var s1=new Student(101,"Raman","Angular",89);
    s1.show();
    s1.result();
console.log("------------------");

    var s2=new Student(102,"Rina","English",23);
    s2.show();
    s2.result();
    
    