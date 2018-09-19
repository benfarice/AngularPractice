import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import {HttpModule, Http} from '@angular/http';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //users:string[]=[];
  //data : Observable<Array<string>>;
  constructor(public http:Http) { 
    /* this.users = ["youssef","aziz","hamid","rim"] */

  }


  addPerson(user){
    return this.http.post("https://jsonplaceholder.typicode.com/users",user)
    .pipe(
    map(
      res => res.json()
    )
    )
  }

  getPersons(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .pipe(
    map(
      res => res.json()
    )
    )
  }

  deletePerson(id){
    return this.http.delete("https://jsonplaceholder.typicode.com/users/"+id)
    .pipe(
    map(
      res => res.json()
    )
    )
  }

  editPerson(item){
    return this.http.put("https://jsonplaceholder.typicode.com/users/"+item.id,item)
    .pipe(
    map(
      res => res.json()
    )
    )
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
