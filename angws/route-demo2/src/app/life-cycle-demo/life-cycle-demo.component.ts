import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css']
})
export class LifeCycleDemoComponent implements OnInit {
message="Hello";
showChild = true;

constructor() { }

ngOnInit() { }

doSome(m) {
this.message = m;
}

toggleChild() {
this.showChild = !this.showChild;
}

}
