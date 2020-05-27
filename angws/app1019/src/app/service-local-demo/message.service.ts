import { EventEmitter } from "@angular/core";

export class MessageService{
    messages:string[]=["Hello"];
    onMessageAdd:EventEmitter<string[]>=new EventEmitter<string[]>();
   
    add(msg:string){
        this.messages.push(msg);    
        this.onMessageAdd.emit(Object.assign([],this.messages))   ;
    }

    getAll(){
        return Object.assign([],this.messages);
    }
    
    
}