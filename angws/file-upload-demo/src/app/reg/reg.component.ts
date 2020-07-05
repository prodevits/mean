import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserHttpService } from '../services/user.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  regForm: FormGroup;
  @ViewChild("image",{static:false}) imageInput:ElementRef;

  constructor(private userHttpService: UserHttpService, private router: Router) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(),
      photo: new FormControl()
    });
  }

  onSubmit() {
    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
     this.regForm.patchValue({ "photo": file });
     console.log(file);
     
    this.userHttpService.saveReg(this.regForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("users");
    })
  }
}
