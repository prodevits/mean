import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserHttpService } from '../services/user.http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg2',
  templateUrl: './reg2.component.html',
  styleUrls: ['./reg2.component.css']
})
export class Reg2Component implements OnInit {
  regForm: FormGroup;
  @ViewChild("image",{static:false}) imageInput:ElementRef;
  imagePreview=undefined;

  constructor(private userHttpService: UserHttpService, private router: Router) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(),
      photo: new FormControl()
    });
  }


  preview() {

    const reader=new FileReader();  
    
    reader.onload=()=>{
      this.imagePreview = reader.result as string;
    }

            // const htmlFileInput=this.imageInput.nativeElement as HTMLInputElement;
    // const file = htmlFileInput.files[0];

    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
    //console.log(file);
    console.log(file.type);
    
    
    reader.readAsDataURL(file);  
  }

  onSubmit() {
    // const htmlFileInput=this.imageInput.nativeElement as HTMLInputElement;
    // const file = htmlFileInput.files[0];

    const file = (this.imageInput.nativeElement as HTMLInputElement).files[0];
     this.regForm.patchValue({ "photo": file });
     this.userHttpService.saveReg(this.regForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("users");
    })
  }
}
