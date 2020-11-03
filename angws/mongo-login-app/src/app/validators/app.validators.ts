import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

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
    }
