import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { EmpHttpService } from '../emp-http.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  emp:Employee=new Employee();
  errorMessage=null;
  @Output ("add") addEvent=new EventEmitter();

  constructor(private empService: EmpHttpService) { }

  ngOnInit() {
  }

  addEmp(){
   console.log(this.emp); 
   this.empService.getEmpById(this.emp.empid).subscribe((data)=>{
    if(data.length>0){
      this.errorMessage="Duplicate ID";
    }else{
      this.errorMessage=null;
this.postData();

    }
   });

  
  }

  postData(){
    this.empService.addEmpPost(this.emp).subscribe( (data)=>{
      if(data=="1"){
        console.log("data post Added");      
        this.addEvent.emit();
      }    
     },(error)=>{
       console.log(error.error.text);
       
     });
  }
}
