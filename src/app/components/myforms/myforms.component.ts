import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent implements OnInit {


  name:string="your first name :";
  lname:string="your last name : ";
  age:number=0

  /*
  name:string="";
  myShop:string[]=["apple","orange","watermilon"];

  mySubmit(){
    this.myShop.push(this.name);
    this.name="";
  }
  */

  constructor() { }

  ngOnInit() {
  }

}
