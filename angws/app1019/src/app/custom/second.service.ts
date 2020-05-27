import { BasicService } from "../service/basic.service";
import { Injectable } from "@angular/core";

@Injectable()
export class SecondService{
    constructor(private service:BasicService){}

    getAllData(){
        return this.service.getAll();
    }
}