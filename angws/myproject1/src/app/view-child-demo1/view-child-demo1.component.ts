import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child-demo1',
  templateUrl: './view-child-demo1.component.html',
  styleUrls: ['./view-child-demo1.component.css']
})
export class ViewChildDemo1Component implements OnInit {

  @ViewChild('pname', {static: false}) nameEle:ElementRef;
  @ViewChild('page', {static: false}) ageEle:ElementRef;
  @ViewChild('nameErr', {static: false}) nameErrEle:ElementRef;
  @ViewChild('ageErr', {static: false}) ageErrEle:ElementRef;
  
  constructor() { }
  ngOnInit() {
  }

onSubmit(){
	let name=this.nameEle.nativeElement.value;
	let age=this.ageEle.nativeElement.value;
  console.log("Name="+name);
  console.log("Age="+age);
  

  if(name.length==0){
    this.nameErrEle.nativeElement.innerHTML="Name Required";
    this.nameEle.nativeElement.style.background="#F00";
  }else if(name.length<5){
    this.nameErrEle.nativeElement.innerHTML="Invalid Name";
    this.nameEle.nativeElement.style.background="#F00";
  }else{
    this.nameEle.nativeElement.style.background="#FFF";
    this.nameErrEle.nativeElement.innerHTML="";    
  }

  if(age.length==0){
    this.ageErrEle.nativeElement.innerHTML="Age Required";
    this.ageEle.nativeElement.style.background="#F00";   
  }else if (isNaN(age) || age<=0 || age>100){
    this.ageErrEle.nativeElement.innerHTML="Invalid Age";
    this.ageEle.nativeElement.style.background="#F00";   
  }else{
    this.ageErrEle.nativeElement.innerHTML="";
    this.ageEle.nativeElement.style.background="#FFF";  
  }
}

clear(){
  this.ageEle.nativeElement.value=''; 
  this.nameEle.nativeElement.value='';

  this.nameEle.nativeElement.style.background="#FFF";
  this.nameErrEle.nativeElement.innerHTML="";    

  this.ageErrEle.nativeElement.innerHTML="";
  this.ageEle.nativeElement.style.background="#FFF";  

}

}
