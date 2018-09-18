import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {DataServiceService} from './services/data-service.service';
import { ImzouComponentComponent } from './components/imzou-component/imzou-component.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';
import { MyformsComponent } from './components/myforms/myforms.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ImzouComponentComponent,
    EventsComponent,
    CeventsComponent,
    MyformsComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
