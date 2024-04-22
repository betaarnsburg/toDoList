package com.itf.finalexam.backend.controller;

import com.itf.finalexam.backend.entities.Todo;
import com.itf.finalexam.backend.services.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * zusätzlich zu den unten aufgeführten Stories:
 * ... eine Validierung des Todos, die an das Backend übermittelt werden
 *      •	der Titel darf höchstens 20 Zeichen lang sein
 *      •	die Beschreibung darf nicht leer sein
 */
@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/abschlusstest")
@AllArgsConstructor
public class TodoController {
    private TodoService todoService;
    /**
     * ... einzelne Todos über eine Restschnittstelle speichern können
     */
    @PostMapping
    public ResponseEntity<Todo> addTodo(@RequestBody @Validated Todo todo) {
        if(todo.getId() != null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(todoService.save(todo));
    }


    /**
     * ... ein Todo über eine Restschnittstelle abrufen können
     */
    @GetMapping("/{id}")
    public ResponseEntity<Todo> findById(@PathVariable Long id) {
        if(todoService.findById(id).isPresent()) {
            return ResponseEntity.of(todoService.findById(id));
        }else {
            return ResponseEntity.notFound().build();
        }
    }


    /**
     * ... alle Todos über eine Restschnittstelle erhalten können
     */
    @GetMapping
    public ResponseEntity<List<Todo>> findAll() {
        return ResponseEntity.ok(todoService.findAll());
    }


    /**
     * ... ein Todo über eine Restschnittstelle löschen können
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        if(todoService.findById(id).isPresent()) {
            todoService.deleteById(id);
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }


    /**
     * ... ein Todo über eine Restschnittstelle ändern können
     */
    @PutMapping
    public ResponseEntity<Todo> updateTodo(@RequestBody @Validated Todo todo) {
        if(todo.getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(todoService.save(todo));
    }
}
