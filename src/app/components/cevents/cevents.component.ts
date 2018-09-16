import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cevents',
  templateUrl: './cevents.component.html',
  styleUrls: ['./cevents.component.css']
})
export class CeventsComponent implements OnInit {

  myname:string="Imzoughene Youssef";
  check:boolean=true;
  MyClickn(){
    //this.myname="Anas Aarab";
    this.check=!this.check;
  }

  constructor() { }

  ngOnInit() {
  }

}
