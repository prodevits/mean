import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserHttpService } from '../services/user.http.service';
import { Router } from '@angular/router';
import { AppValidators } from '../validators/app.validators';

@Component({
  selector: 'app-reg3-val',
  templateUrl: './reg3-val.component.html',
  styleUrls: ['./reg3-val.component.css']
})
export class Reg3ValComponent implements OnInit {
  regForm: FormGroup;
  @ViewChild("image", { static: false }) imageInput: ElementRef;
  imagePreview = undefined;

  constructor(private userHttpService: UserHttpService, private router: Router) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      photo: new FormControl(null, AppValidators.image)
    });
  }


  preview() {
    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
    console.log(file);
    this.regForm.patchValue({ "photo": file });
    this.regForm.get("photo").updateValueAndValidity();
    if (this.regForm.get("photo").valid) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      }
      reader.readAsDataURL(file);
    }else{
      this.imagePreview = undefined;
    }

 
  }

  onSubmit() {
    if (this.regForm.valid) {
      this.userHttpService.saveReg(this.regForm.value).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("users");
      });
    }
    console.log("Data Submitted");
    
  }
}

