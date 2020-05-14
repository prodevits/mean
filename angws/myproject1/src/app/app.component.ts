import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject1';
  name="Aman Sharma";
  txt1:string;

  txtChange(event:any){
    this.txt1=event.target.value;

  }
}
  