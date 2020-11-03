import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export class AppValidators{
    static mimes=['image/jpeg','image/gif','image/png'];
    static image(control:AbstractControl):ValidationErrors{
            const file=control.value;
            console.log("in validation");
            console.log(file);
            if(file){
                const ct=file.type
                console.log(ct);                
                if(AppValidators.mimes.indexOf(ct)==-1){
                    return {'image':true}
                }
            }      
            
            return null;
        }

    static textMatch(f1:string,f2:string):ValidatorFn{
        return (formGroup:FormGroup):ValidationErrors=>{
            const control1=formGroup.get(f1);
            const control2=formGroup.get(f2);
            if(control1.value!=control2.value){
                return {'textmatch':{message:'Not Matched'}}
            }
            return null;
        }
    }
    }
