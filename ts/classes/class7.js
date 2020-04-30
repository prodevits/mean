// class member & access modifier
var Demo = /** @class */ (function () {
    function Demo() {
        this.x = "Ramesh"; // default is public
        this.y = "Rina";
        this.z = "Sohan";
    }
    Demo.prototype.show = function () {
        console.log(this.x);
        console.log(this.y);
        console.log(this.z);
    };
    return Demo;
}());
var obj = new Demo();
obj.show();
console.log(obj.x);
// console.log(obj.y); //Error
// console.log(obj.z); //Error
