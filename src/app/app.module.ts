import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { Componenet4cardComponent } from './componenet4card/componenet4card.component';
import { Component5vedioComponent } from './component5vedio/component5vedio.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Componenet3Component,
    Componenet4cardComponent,
    Component5vedioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
