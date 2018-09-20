import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {DataServiceService} from './services/data-service.service';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { ImzouComponentComponent } from './components/imzou-component/imzou-component.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';
import { MyformsComponent } from './components/myforms/myforms.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyFormsComponent } from './components/my-forms/my-forms.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const appRoute:Routes = [
  {path:'',component:HomeComponent},
  {path:'profiles',component:ProfilesComponent},
  {path:'profile/:id',component:UserprofileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ImzouComponentComponent,
    EventsComponent,
    CeventsComponent,
    MyformsComponent,
    MyComponentComponent,
    MyFormsComponent,
    HomeComponent,
    ProfilesComponent,
    NavbarComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
