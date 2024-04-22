import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";
import {TodoTableComponent} from "./components/todo-table/todo-table.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    TodoFormComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
