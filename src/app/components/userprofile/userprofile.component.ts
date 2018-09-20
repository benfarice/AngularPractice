import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  name:any;
  constructor(private router:Router,private route:ActivatedRoute) {
    this.route.params.subscribe((p:Params)=>{
      this.name=p;
      console.log(p);
    });
   }

  ngOnInit() {
  }

}
