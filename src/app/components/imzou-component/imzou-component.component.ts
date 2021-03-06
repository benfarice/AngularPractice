import { Component, OnInit } from '@angular/core';
import { Persons } from './Persons';
@Component({
  selector: 'app-imzou-component',
  templateUrl: './imzou-component.component.html',
  styleUrls: ['./imzou-component.component.css']
})
export class ImzouComponentComponent implements OnInit {

  suname:string="Sultan Abdulhamid";
  sultanName:boolean = false;


  myNumber:number = 45;
  myImage:string="data:image/jpeg;base64,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";


  birthday=new Date(1993,5,25);

  myDreamSalary=2000;

  myRate=12.87;


  totalClass={};
  ClassFunction(){
    this.totalClass={
      myClassCss:true,
      myClassCss2:true
    }
  }


  //myClassCss:boolean=true;



  person:Persons;
  people:Persons[];
  men=["Abd El aziz","Abd El hamid","oussama","anas"];
  jobs=["Developer","Programmer","Network","System Admin"];
  plang = [{
    languageName:"JAVA",
    shortcut:"JA",
    city:"Casablanca"
  },
  {
    languageName:"PHP",
    shortcut:"PHP",
    city:"rabat"
  },
  {
    languageName:"PERL",
    shortcut:"JA",
    city:"fes"
  },
  {
    languageName:"ANGULAR",
    shortcut:"JA",
    city:"meknes"
  },
  {
    languageName:"FIREBASE",
    shortcut:"JA",
    city:"oujda"
  }];
  /*{
    id:number,
    name:string,
    firstname:string,
    age:number
  }*/

  constructor() {
    this.person={
      id:1003,
      name:"imzoughene",
      firstname:"youssef",
      age:25
    }, 
    this.people=[{
      id:986,
      name:"aarab",
      firstname:"anas",
      age:25
    },
    {
      id:986,
      name:"tamraoui",
      firstname:"oussama",
      age:25
    },
    {
      id:986,
      name:"dourghale",
      firstname:"nouhaila",
      age:25
    }    
    ];
  }

  ngOnInit() {
    this.ClassFunction();

  }

}

/*
interface Persons{
    id:number,
    name:string,
    firstname:string,
    age:number
}
*/
/*


 ngOnInit() {
    //this.imzoughene.DreamJob="Expert Developer";
    //this.imzoughene.age=25;
  }
  changeCareer(){
    this.imzoughene.DreamJob="Expert Developer";
  }
  changeAge(){
    this.imzoughene.age=26;
  }

 name:string = "imzoughene";
  firstname:string="youssef";
  age:number = 2018-1993;
  isEmployee:boolean=true;
  myvar :any="Oufa"
  names:string[]=["alaa","sami","sara"]
  numbers:number[];
  tupel:[string,number];


  imzoughene = {
    age:24,
    DreamJob : "Developer",
    DreamWife : "MuslimWife"
  }








  constructor() {
    this.name="Youssef Amzian";
    //this.changeCareer();
    this.changeAge();
    this.isEmployee=true;
    //this.myvar=1993
    this.myvar=["ahmed","hisha","abd el aziz","abd el hamid","rim"]
    this.numbers=[5,6,4,23];
    this.tupel=["imzoughene",25];
   }



*/