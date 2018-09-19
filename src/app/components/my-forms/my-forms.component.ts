import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {

  users :any[];
  user = {
    name:"",
    username:"",
    email:""
  }
  isEditMode:boolean=false;

  constructor(public dataService:DataServiceService) {
      this.dataService.getPersons().subscribe(u=>
      {
        this.users=u;
      }
      );
  }


  mySubmit(){


    if (this.isEditMode) {
      this.dataService.editPerson(this.user).subscribe(u=>{
        //this.users.unshift(u);
        console.log(u);
        this.isEditMode=false;
      }); 
    } else {
      this.dataService.addPerson(this.user).subscribe(u=>{
        this.users.unshift(u);
  
      }); 
    }
 

  }

  deleteItem(id){
    this.dataService.deletePerson(id).subscribe(result=>{
      console.log(result);
      for(var i = this.users.length - 1; i >= 0; i--) {
        if(this.users[i].id === id) {
           this.users.splice(i, 1);
        }
    }
    });
  }

  EditItem(item){
    this.isEditMode=true;
    this.user=item;
  }
  ngOnInit() {
  }

}
