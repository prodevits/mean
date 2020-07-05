import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserHttpService } from '../services/user.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-photo-with-event',
  templateUrl: './reg-photo-with-event.component.html',
  styleUrls: ['./reg-photo-with-event.component.css']
})
export class RegPhotoWithEventComponent implements OnInit {

  regForm: FormGroup;

  constructor(private userHttpService: UserHttpService, private router: Router) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(),
      photo: new FormControl()
    });
  }


  onPhotoPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.regForm.patchValue({ "photo": file });
    console.log(file);
    
    // this.regForm.get("photo").updateValueAndValidity();
    // const reader=new FileReader();
    // // reader.onload=()=>{

    // // }
    // reader.readAsDataURL(file);
    // console.log(file);
  }

  onSubmit() {
    
    this.userHttpService.saveReg(this.regForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("users");
    })
  }

}