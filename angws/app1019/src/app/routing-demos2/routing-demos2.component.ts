import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-demos2',
  templateUrl: './routing-demos2.component.html',
  styleUrls: ['./routing-demos2.component.css']
})
export class RoutingDemos2Component implements OnInit {
id:string;
name:string;
paramsSubscription: Subscription;
constructor(private activeRoute: ActivatedRoute){
	
}
	ngOnInit(): void {
		this.paramsSubscription=
		this.activeRoute.params.subscribe(
			(params)=>{
        this.id=params['id']; 
        this.name=params['nm'];
			}
	);



	// this.id=this.activeRoute.snapshot.params['id'];
	// this.name=this.activeRoute.snapshot.params['nm'];
	}




	ngOnDestroy(): void {
	//	this.paramsSubscription.unsubscribe();
	}


}
