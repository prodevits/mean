import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Input, Directive } from '@angular/core';


@Directive({
    selector:'[range]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: RangeValidator,
        multi: true
    }]
})
export class RangeValidator implements Validator{

    @Input("range") rangeData:number[];

    validate(control: AbstractControl):ValidationErrors{         
            
        if(this.rangeData && this.rangeData.length==2){
            const v1=this.rangeData[0];
            const v2=this.rangeData[1];
            const v= parseFloat(control.value);
            if(v<v1 ||  v>v2){
                return {'range':{min:v1,max:v2}};
            }

        }

        return null;
    }
}
