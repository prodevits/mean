// interface as function argument
//interface as function return type
var Rect = /** @class */ (function () {
    function Rect(l, b) {
        this.l = l;
        this.b = b;
    }
    Rect.prototype.show = function () {
        console.log("Rectangle");
        console.log("Length=" + this.l);
        console.log("Breadth=" + this.b);
    };
    Rect.prototype.area = function () {
        return this.l * this.b;
    };
    return Rect;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.show = function () {
        console.log("Circle");
        console.log("Radius=" + this.radius);
    };
    Circle.prototype.area = function () {
        var a = Math.PI * this.radius * this.radius;
        return a;
    };
    return Circle;
}());
var App = /** @class */ (function () {
    function App() {
    }
    // interface as function argument
    App.printInfo = function (s) {
        s.show();
        var a = s.area();
        console.log("Area=" + a.toFixed(2));
    };
    //interface as function return type
    App.max = function (s1, s2) {
        if (s1.area() > s2.area()) {
            return s1;
        }
        else {
            return s2;
        }
    };
    return App;
}());
var r1 = new Rect(10, 20);
var c1 = new Circle(5);
App.printInfo(r1);
App.printInfo(c1);
var s = App.max(r1, c1);
console.log("---Bigger Shape---");
App.printInfo(s);
