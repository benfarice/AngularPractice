import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  users:string[]=[];

  constructor(public dataService:DataServiceService) {
    //this.users=dataService.getUsers();
    //this.dataService.getUsers().subscribe(d=>{
    this.dataService.getPersons().subscribe(d=>{
      
     // this.users.push(d);
     this.users = d;
      
    });
  }

  ngOnInit() {
  }

}
