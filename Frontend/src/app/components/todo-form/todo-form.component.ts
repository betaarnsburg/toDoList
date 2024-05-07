import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../../services/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

/**
 * ... ein Formular zum erstellen eines neuen Todos (separate Seite)
 */
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private todoService: TodoService, private route: ActivatedRoute,
              private router: Router) {
    this.todoForm = this.formBuilder.group({
      id:[],
      task: [null, [Validators.required, Validators.maxLength(20)]],
      details: [null, Validators.required],
      date: [null, Validators.required],
      completed: [false],
    })
    const id = this.route.snapshot.paramMap.get("id")
    if(id) {
      this.todoService.findById(parseInt(id)).subscribe(data => this.todoForm.patchValue(data))
    }

  }

  saveTodo(){
    if(this.todoForm.value.id) {
      this.todoService.updateTodo(this.todoForm.value).subscribe(() => this.router.navigate(["/overview"]));
    } else{
      this.todoService.addTodo(this.todoForm.value).subscribe(() => this.router.navigate(["/overview"]));
    }
  }

}
