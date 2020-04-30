var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.show = function () {
        console.log("x=" + A.x);
        console.log("y=" + this.y);
    };
    return A;
}());
var a1 = new A();
var a2 = new A();
a1.show();
a2.show();
console.log("--------------------");
//a1.x=100;    //error : x is static
A.x = 100;
a1.y = 20;
a1.show();
a2.show();
console.log("--------------------");
A.x = 500;
a2.y = 50;
a1.show();
a2.show();
