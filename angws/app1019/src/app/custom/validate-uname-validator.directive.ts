import { Validators, NG_VALIDATORS, AbstractControl, ValidationErrors } from "@angular/forms";
import { Directive } from "@angular/core";
@Directive({
    selector:'[validate-uname]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:ValidateUnameValidator,
        multi: true
    }]
})
export class ValidateUnameValidator implements Validators{
    
    validate(control: AbstractControl):ValidationErrors
    {
        const s=control.value;
        console.log("uname validation = "+s);
        
        if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
            return {'validate-uname':{'message':'First Char must be in Uppercase'}};
        }
        return null;
    }

    static uname(control: AbstractControl):ValidationErrors
    {
        const s=control.value;
        console.log("uname validation = "+s);
        
        if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
            return {'validate-uname':{'message':'First Char must be in Uppercase'}};
        }
        return null;
    }
}