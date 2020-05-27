import { Injectable, EventEmitter } from "@angular/core";


@Injectable({providedIn:'root'})
export class PersonService{
    private persons:{id:number,name:string,age:number,salary:number,dept:string}[]=[
        {id:101,name: 'Ramesh sharma', age: 34,salary:45000,dept:'HR'},
    {id:102,name: 'sohan singh', age:12,salary:12000.897,dept:'ACCOUNT'},
    {id:103,name: 'Raman', age:89,salary:8000,dept:'SALES'},
    {id:104,name: 'Ranak', age:89,salary:78000,dept:'NA'},
    {id:105,name: 'suman', age:29,salary:38000,dept:'ACCOUNT'}];
    
    onPersonChange:EventEmitter<{id:number,name:string,age:number,salary:number,dept:string}[]>;
    onPersonEdit:EventEmitter<{id:number,name:string,age:number,salary:number,dept:string}>;
    onEditModeChange:EventEmitter<boolean>;
    constructor(){
        this.onPersonChange=new EventEmitter<{id:number,name:string,age:number,salary:number,dept:string}[]>();
        this.onPersonEdit=new EventEmitter<{id:number,name:string,age:number,salary:number,dept:string}>();
        this.onEditModeChange=new EventEmitter<boolean>();
    }  
    
    getPersons(){
        return Object.assign([],this.persons);
    }
    getPerson(id){
        return this.persons.find(e=>e.id==id);
    }
    addPerson(p){
        this.persons.push(p);
        this.onPersonChange.emit(Object.assign([],this.persons));
    }
    editPerson(id:number){
        let p=this.persons.find(e=>e.id==id);
        this.onPersonEdit.emit(p);
        this.onEditModeChange.emit(true);
    }
    updatePerson(p){
        let i=this.persons.findIndex(e=>e.id==p.id);
        Object.assign(this.persons[i],p);
        this.onPersonChange.emit(Object.assign([],this.persons));
        this.onEditModeChange.emit(false);
    }    
    removePerson(id:number){
        this.persons.splice(this.persons.findIndex(e=>e.id==id),1);
        this.onPersonChange.emit(this.persons);
    }

    cancelUpdate(){
        this.onEditModeChange.emit(false);
    }
}