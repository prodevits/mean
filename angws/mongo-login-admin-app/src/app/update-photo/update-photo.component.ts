import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppValidators } from '../validators/app.validators';

@Component({
  selector: 'app-update-photo',
  templateUrl: './update-photo.component.html',
  styleUrls: ['./update-photo.component.css']
})
export class UpdatePhotoComponent implements OnInit {
  currentPic:string;
  regForm: FormGroup;
  editMode=false;

  @ViewChild("image", { static: false }) imageInput: ElementRef;
  error=undefined;
  success=undefined;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      photo: new FormControl(null, [AppValidators.image,Validators.required])
    });

    this.currentPic=this.userService.getProfilePhoto();
    console.log(this.currentPic);
    
  }


  preview() {
    this.editMode=true;
    this.success=false;

    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
    console.log(file);
    this.regForm.patchValue({ "photo": file });
    this.regForm.get("photo").updateValueAndValidity();
    if (this.regForm.get("photo").valid) {
      const reader = new FileReader();
      reader.onload = () => {
        this.currentPic = reader.result as string;
      }
      reader.readAsDataURL(file);
    }else{
      this.currentPic = undefined;
    }
 
  }

  onSubmit() {
    this.success=undefined;
    this.error=undefined;
    if (this.regForm.valid) {
      this.userService.uploadPhoto(this.regForm.value.photo).subscribe(response => {
        console.log(response);
        if(response.status=="SUCCESS"){
          this.success="Photo Uploaded";
          this.userService.setProfilePhoto(response.profile_pic);
          this.currentPic=this.userService.getProfilePhoto();   
          this.editMode=false;  
        }else{
          this.error=response.message;
        }
      //  this.router.navigateByUrl("users");
      });
    }
    console.log("Data Submitted");    
  }


}
