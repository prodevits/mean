export class User{
    static count=0;
    constructor(public id?:number,public uname?:string,public gender?:string,public email?:string,public quals?:string[],public nri?:boolean){
        
    }
    setId(){
        if(!this.id)
            this.id=++User.count;
    }
}