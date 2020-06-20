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
    Rect.prototype.showAll = function () {
        this.show();
        var a = this.area();
        console.log("Area=" + a);
    };
    return Rect;
}());
var r1 = new Rect(10, 20);
r1.showAll();
