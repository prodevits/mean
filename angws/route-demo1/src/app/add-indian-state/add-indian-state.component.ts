import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-indian-state',
  templateUrl: './add-indian-state.component.html',
  styleUrls: ['./add-indian-state.component.css']
})
export class AddIndianStateComponent implements OnInit {
  code:string;
  name:string;
  capital:string;

  constructor(private stateService:StateService,private router:Router) { }

  ngOnInit() {
   
  }

  add(){
    this.stateService.addIndianState(this.code,this.name,this.capital);
    this.router.navigateByUrl("/states");
  //this.router.navigate(['/capital',this.code]);

  }
}
