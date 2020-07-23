import { ValidationErrors, NG_VALIDATORS, Validator,  FormGroup } from "@angular/forms";
import { Input, Directive } from '@angular/core';

@Directive({
    selector: '[textmatch]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: TextMatchValidator,
        multi: true
    }]
})
export class TextMatchValidator implements Validator {
    @Input('textmatch') fields: string[];
    validate(form: FormGroup): ValidationErrors {  
        if(this.fields){
            const t1 = form.get(this.fields[0]);
            const t2 = form.get(this.fields[1]);   
            if (t1 && t2) {
                if (t1.value != t2.value)
                    return { 'textmatch': true };
            }
        } 
        return null;
    }
}