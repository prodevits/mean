var Student = /** @class */ (function () {
    function Student(rollno, name, course, marks) {
        this.rollno = rollno;
        this.name = name;
        this.course = course;
        this.marks = marks;
    }
    Student.prototype.show = function () {
        console.log("Rollno=" + this.rollno);
        console.log("Name=" + this.name);
        console.log("Course=" + this.course);
        console.log("Marks=" + this.marks);
    };
    return Student;
}());
var s1 = new Student(101, "Raman", "Angular", 89);
s1.show();
