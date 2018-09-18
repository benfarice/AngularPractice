import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  users:string[]=[];
  constructor() { 
    this.users = ["youssef","aziz","hamid","rim"]

  }
  public getUsers(){
    return this.users;
  }
}
