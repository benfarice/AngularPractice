import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent implements OnInit {

  verifyForm:string="";
  user = {
    name:"",
    lname:"",
    age:0
  }
  mySubmit({value,valid}){
    if(valid){
      //this.verifyForm=value;
      this.verifyForm=value.name;
    }else{
      this.verifyForm="Not valid"
    }
  }
 /*  name:string="";
  lname:string="";
  age:number=0 */

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
