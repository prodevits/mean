import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements OnInit,AfterViewInit {

  @ViewChild('pname', {static: false}) nameEle:ElementRef;
  @ViewChild('page', {static: false}) ageEle:ElementRef;

  constructor() { 
    console.log("In constructor");
    
  }
  ngOnInit() {
    console.log("In ngOnInIt");    
    console.log(this.nameEle);
    console.log(this.ageEle);

  }

  ngAfterViewInit(){
    console.log("In After View InIt");    
    console.log(this.nameEle);
    console.log(this.ageEle);
  }
onSubmit(){
	let name=this.nameEle.nativeElement.value;
	let age=this.ageEle.nativeElement.value;
  console.log("Name="+name);
  console.log("Age="+age);
  
  this.ageEle.nativeElement.value=''; 
  this.nameEle.nativeElement.value='';

}

}
