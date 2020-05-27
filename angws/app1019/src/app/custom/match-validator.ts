import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validators, ValidationErrors, FormGroup, AbstractControl } from "@angular/forms";

@Directive({
    selector:'[match]',
    providers:[
        {   provide: NG_VALIDATORS,
            useExisting:MatchValidator,
            multi :true
        }
    ]
})

export class MatchValidator implements Validators
{
    @Input('match') fields:string[];
    validate(formGroup: FormGroup):ValidationErrors{
       console.log(this.fields);
       
        if(this.fields && this.fields.length==2){
        const control = formGroup.controls[this.fields[0]];
        const matchingControl = formGroup.controls[this.fields[1]];
        if (control && matchingControl && control.value !== matchingControl.value) {
            return { match: true };
            } 
        }
        return null;
    }

    static matchWith(field1:string,field2:string){
        return (formGroup: FormGroup):ValidationErrors =>{
            console.log("Match validator");
            const fieldControl1= formGroup.get(field1);
            const fieldControl2= formGroup.get(field2);
            if(fieldControl1.value != fieldControl2.value){
                        return {'match':true};
            }       
        
            return null;
        }
    }
}