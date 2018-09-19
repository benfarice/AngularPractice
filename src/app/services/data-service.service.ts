import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpModule, Http} from '@angular/http';
import "rxjs/add/operator/map";
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //users:string[]=[];
  //data : Observable<Array<string>>;
  constructor(public http:Http) { 
    /* this.users = ["youssef","aziz","hamid","rim"] */

  }

  getPersons(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

 /*  public getUsers(){
    //return this.users;
    this.data = new Observable(observer=>{
      setTimeout(()=>{
        observer.next("imzoughene")
      },1000);
      setTimeout(()=>{
        observer.next("tamraoui")
      },2000);
      setTimeout(()=>{
        observer.next("aarab")
      },3000);
      setTimeout(()=>{
        observer.next("elhor")
      },4000);
      setTimeout(()=>{
        observer.next("belhamra")
      },5000);
      setTimeout(()=>{
        observer.next("aytshref")
      },6000);
    });
    return this.data;
  } */
}
