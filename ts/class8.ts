class Student{
    constructor(public rollno : number,public name : string,public course : string,public marks : number){}
    
    show():void{
    console.log("Rollno="+this.rollno);
    console.log("Name="+this.name);
    console.log("Course="+this.course);
    console.log("Marks="+this.marks);
    }
    }
    
    var s1=new Student(101,"Raman","Angular",89);
    s1.show();
    