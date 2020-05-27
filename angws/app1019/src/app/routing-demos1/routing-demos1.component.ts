import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-demos1',
  templateUrl: './routing-demos1.component.html',
  styleUrls: ['./routing-demos1.component.css']
})
export class RoutingDemos1Component implements OnInit {
  data=[{id:104,name:'aman'},{id:106,name:'Raman'}];
  constructor(private router:Router) { }
  ngOnInit() {
  }
  redirect(page){
    this.router.navigate([page]);
  }

  show(){
    this.router.navigate(['routeParam',8899,'Rohan']);
  }
}
