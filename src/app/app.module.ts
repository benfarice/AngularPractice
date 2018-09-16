import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImzouComponentComponent } from './components/imzou-component/imzou-component.component';
import { EventsComponent } from './components/events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    ImzouComponentComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
