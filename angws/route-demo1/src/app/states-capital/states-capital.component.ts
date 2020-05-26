import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states-capital',
  templateUrl: './states-capital.component.html',
  styleUrls: ['./states-capital.component.css']
})
export class StatesCapitalComponent implements OnInit {
  stateCode:string;

  constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.stateCode=params['code'];
    });
  }
}
