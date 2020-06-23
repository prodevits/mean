import { ValidationErrors, AbstractControl } from '@angular/forms';

export function checkPass(control: AbstractControl):ValidationErrors{
      const sp=['@','$','#'];
      const v:string=control.value;
      let valid=false;
     for(let ch of sp){
           if(v.indexOf(ch)>-1)
            {
                valid=true;
                break;
            }
     }
     if(!valid){
         return {'checkPass':{'message':`Must have atleast one special char [${sp}]`}};
     }
    return null;
} 