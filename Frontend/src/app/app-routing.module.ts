import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoTableComponent} from "./components/todo-table/todo-table.component";
import {TodoFormComponent} from "./components/todo-form/todo-form.component";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";

const routes: Routes = [
  {path:"overview", component:TodoTableComponent},
  {path:"create", component:TodoFormComponent},
  {path:"update/:id", component:TodoFormComponent},
  {path:"details/:id", component:TodoDetailsComponent},
  {path:"**", component:TodoTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
