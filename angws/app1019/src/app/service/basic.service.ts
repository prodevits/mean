import { Injectable } from "@angular/core";


export class BasicService{
    data:string[]=['Bhopal','Indore','Mumbai'];

    add(e:string){
        this.data.push(e);
    }

    getAll(){
        return Object.assign([],this.data);
    }
}