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
var A = /** @class */ (function () {
    function A(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    A.prototype.show = function () {
        console.log("No1=" + this.n1);
        console.log("No2=" + this.n2);
    };
    A.prototype.add = function () {
        return this.n1 + this.n2;
    };
    A.prototype.sub = function () {
        return this.n1 - this.n2;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.div = function () {
        return this.n1 / this.n2;
    };
    B.prototype.multiply = function () {
        return this.n1 / this.n2;
    };
    B.prototype.show = function () {
        console.log("Hello");
        _super.prototype.show.call(this);
    };
    return B;
}(A));
var b = new B(100, 20);
b.show();
var s = b.add();
console.log("Add=" + s);
var m = b.sub();
console.log("Sub=" + m);
var d = b.div();
console.log("Division=" + d);
var p = b.multiply();
console.log("Multiplication=" + p);
