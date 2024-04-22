import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo";
import {ActivatedRoute} from "@angular/router";

/**
 * ... beim klicken auf ein Todo eine Detailansicht,
 * in der ich die einzelnen Werte des Todos ändern und speichern kann
 */
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  @Input()
  detail?: Todo;

  @Output()
  onDeleteTodo= new EventEmitter<number>();

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    const id = +this.route.snapshot.params['id'];
    if(id){
      this.todoService.findById(id).subscribe(data => { this.detail = data; });
    }
  }

  deleteTodo(id: number, event: Event){
    event.stopPropagation();
    this.onDeleteTodo.emit(id);
  }

  onButtonCompleteClick(){
    if(this.detail){
      this.detail.completed = true;
      this.todoService.updateTodo(this.detail).subscribe();
    }
  }
}
