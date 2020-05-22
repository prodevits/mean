import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  templateUrl: './view-child-demo.component.html',
  styleUrls: ['./view-child-demo.component.css']
})
export class ViewChildDemoComponent implements OnInit {

  @ViewChild('pname', {static: false}) nameEle:ElementRef;
  @ViewChild('page', {static: false}) ageEle:ElementRef;

  constructor() { }
  ngOnInit() {
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
