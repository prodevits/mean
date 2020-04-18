interface Employee{
    fname:string;
    lname:string;
    salary:number;
    }

function print_employee(emp:Employee){
    console.log(emp.fname);
    console.log(emp.lname);
    console.log(emp.salary);
    }


let emp:Employee={fname:'Sunil',lname:'Singh',salary:31000}    
print_employee(emp);
console.log("--------------------");
print_employee({fname:'Ram',lname:'sharma',salary:23000});
console.log("--------------------");
// print_employee({fname:'Ram',lname:'sharma'});
// console.log("--------------------");
// print_employee({name:'rohit',city:'indore'});
// console.log("--------------------");