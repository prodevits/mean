// Accessor / Mutater
//  Accessors supported after ES5 version so if there is error in compilation then compile with es6 target
// tsc class11 -target es6

class Person{
    private _name:string;
    private _age:number;

    set name(name:string){
        this._name=name;
    }
    get name():string{
        return this._name;
    }
    set age(age){
        if(age>0)
            this._age=age;
        else
        console.log("Error : Invalid Age");        
    }
    get age(){
        return this._age;
    }
}

    let p1=new Person();
    p1.name="Ram";
    p1.age=23;
    console.log("Name="+p1.name);
    console.log("Age="+p1.age);
    p1.age=0;  // show Error message at runtime
    console.log("Age="+p1.age);


