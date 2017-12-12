import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SlickModule } from 'ngx-slick';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

@NgModule({
  declarations: [
    AppComponent,
    Parallax
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
