import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { Route, RouterModule, Routes } from '@angular/router';

const my:Routes=
[
  {
    path:"",
    component:ViewComponent
  },
  {
    path:"add",
    component:AddComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(my)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
