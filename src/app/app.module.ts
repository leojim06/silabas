import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SilabasData } from './data/data.service';
import { SilabasComponent } from './silabas/silabas.component';
import { SilabaComponent } from './silaba/silaba.component';


@NgModule({
  declarations: [
    AppComponent,
    SilabasComponent,
    SilabaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [SilabasData],
  bootstrap: [AppComponent]
})
export class AppModule { }
