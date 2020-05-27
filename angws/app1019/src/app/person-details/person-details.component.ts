import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../service-demos/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person:{id:number,name:string,age:number,salary:number,dept:string};
  constructor(private route:ActivatedRoute,private service:PersonService) { }

  ngOnInit() {
  //   this.route.queryParamMap.subscribe(queryParams => {
  //     console.log('Person ID='+queryParams.get("id"));
      
  // });
  let id = this.route.snapshot.queryParamMap.get("id");
   this.person= this.service.getPerson(id);
  console.log('Details of Person ID='+id);      
  }

}
