import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors } from "@angular/forms";

@Directive({
    selector:'[range]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: RangeValidator,
        multi: true
    }]
})

export class RangeValidator implements Validators{
    @Input("range") rangeData:number[];

    validate(control: AbstractControl):ValidationErrors{
        if(this.rangeData && this.rangeData.length==2){
            const v1=this.rangeData[0];
            const v2=this.rangeData[1];
            const v= parseFloat(control.value);
            if(v<v1 ||  v>v2){
                return {'range':true};
            }

        }

        return null;
    }


}