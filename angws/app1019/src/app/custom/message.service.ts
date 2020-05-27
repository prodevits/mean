import { Injectable } from "@angular/core";
import { Message } from "../models/Message.model";

@Injectable({providedIn:'root'})
export class MessageService{
    messages:Message[]=[new Message("App","Hello")];

    addMessage(sender,msg){
        const m=new Message(sender,msg);
        this.messages.push(m);
    }

    getMessages(){
        return this.messages;
    }
}