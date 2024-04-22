import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo";

/**
 * Verwende die TodoService-Klasse nach den erarbeiteten CleanCode Prinzipien
 */
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseURL = 'http://localhost:8080/api/abschlusstest';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseURL}`);
  }
  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseURL}/${id}`);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseURL}`, todo);
  }
  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${this.baseURL}/${id}`);
  }
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseURL}`, todo);
  }
}
