import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

/*  MyClick(){
    console.log("You just clicked me");
    alert("hi are you ok");
  }
  MyClick(args){
  console.log("You just clicked me");
  alert("hi are you ok"+args);
}
*/
MyClick(e,args){
  console.log("You just clicked me");
  alert("hi are you ok "+args+" | "+e.type);
}

  constructor() { }

  ngOnInit() {
  }

}
