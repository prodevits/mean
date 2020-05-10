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
//Super class
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log("Name=" + this.name);
        console.log("Age=" + this.age);
    };
    return Person;
}());
//Sub Class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, city, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.city = city;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.show = function () {
        this.show();
        console.log("City=" + this.city);
        console.log("Salary=" + this.salary);
    };
    return Employee;
}(Person));
var e1 = new Employee("aman", 22, "indore", 12000);
e1.show();
