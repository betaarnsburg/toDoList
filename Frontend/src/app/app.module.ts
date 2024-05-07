import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";
import {TodoTableComponent} from "./components/todo-table/todo-table.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailsComponent,
    TodoFormComponent,
    TodoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
