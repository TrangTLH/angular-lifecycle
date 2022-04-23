import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from "./components/home/home.module";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ButtonComponent} from './commons/button/button.component';
import {H1Component} from './commons/h1/h1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    H1Component
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
