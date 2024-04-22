import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Router} from "@angular/router";
import {Todo} from "../../models/todo";
import {Observable} from "rxjs";

/**
 * ... alle meine Todos und die Daten dieser als Tabelle anzeigen lassen
 *
 * ... den Zustand des Todos mit einem Knopfdruck von “nicht Fertig” auf “Fertig”
 * (und vice versa) ändern können
 *
 * ... einen durchgestrichenen Titel haben, wenn das Todo auf “Fertig” gesetzt worden ist
 *
 * ... mit einem Knopfdruck ein Todo löschen können
 */
@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent {
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
    this.todoService.findAll().subscribe(data => this.todos = data);
  }
  onDeleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    )
  }


}
