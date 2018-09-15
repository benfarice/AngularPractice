import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImzouComponentComponent } from './components/imzou-component/imzou-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ImzouComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
