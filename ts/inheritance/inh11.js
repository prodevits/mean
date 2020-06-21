var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log(this.name);
        console.log(this.age);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(rollno, name, age, fees) {
        var _this = _super.call(this, name, age) || this;
        _this.rollno = rollno;
        _this.fees = fees;
        return _this;
    }
    Student.prototype.show = function () {
        console.log(this.rollno);
        // console.log(this.name);
        // console.log(this.age);
        _super.prototype.show.call(this);
        console.log(this.fees);
    };
    return Student;
}(Person));
// let p=new Person("Rohan",34);
// console.log(p.name);
var s = new Student(101, "Aman", 22, 45000);
s.show();
