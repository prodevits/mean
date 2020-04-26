// read only parameter in constructor
class Team {
    constructor(public name: string, readonly max: number=10) {
        this.name = name;
        if (max) {
            this.max = max;
        }
    }

    show() {
        console.log("Name=" + this.name);
        console.log("MAX=" + this.max);
    }
}

let t1 = new Team("A");
let t2 = new Team("B", 5);
t1.show();
t2.show();
t1.name = "AAA";
// t1.max = 15;      //error

