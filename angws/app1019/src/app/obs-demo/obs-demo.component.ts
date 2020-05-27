import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { ObsService } from './obs.service';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit,OnDestroy {
  messages=[];
  numberSubscription:Subscription;
  msgSubscription:Subscription;
  
  constructor(private obsService:ObsService) { }

  ngOnInit() {
    const numbers:Observable<number>=interval(1000);
     this.numberSubscription= numbers.subscribe((n:number)=>{
      console.log(n);
      
    });

  this.msgSubscription=this.obsService.messanger().subscribe(
    data=>{
      this.messages.push(data);
    },
    error=>{
      this.messages.push(error);
    },
    ()=>{
      this.messages.push('END');
    }

  );
  }
  ngOnDestroy(){
     this.numberSubscription.unsubscribe();
     console.log("---Unsubscribed");
      
  }
}
