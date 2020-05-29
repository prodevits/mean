import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class StateService{
    private states=[{code:"mp",name:"Madhya Pradesh"},{code:"up",name:"Utter Pradesh"},{code:"mh",name:"Maharastra"}];
    private capitals=[{state:"mp",capital:"Bhopal"},{state:"up",capital:"Lakhnow"},{state:"mh",capital:"Mumbai"}];
  
    addIndianState(stCode:string,stName:string,cname:string){
        this.states.push({code:stCode,name:stName});
        this.capitals.push({state:stCode,capital:cname});        
    }

    getIndianStates(){
        return this.states;
    }

    getStateName(code):string{
        const st=this.states.find((e)=>e.code==code);
        return st.name;
    }

    
    getCapital(stateCode:string):string{
       const obj= this.capitals.find((e)=>e.state==stateCode);
       return obj.capital;
    }

}