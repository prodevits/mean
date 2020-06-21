var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.show = function () {
        console.log("x=" + B.x);
        console.log("y=" + this.y);
    };
    B.display = function () {
        console.log("x=" + B.x);
        //console.log("y="+this.y);  //Error 
    };
    return B;
}());
var b1 = new B();
b1.y = 10;
B.x = 100;
b1.show();
B.display();
