package com.itf.finalexam.backend.services;

import com.itf.finalexam.backend.entities.Todo;
import com.itf.finalexam.backend.repositories.TodoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * ClassName: TodoService
 * Package: com.itf.finalexam.backend.services
 * Description:
 * Author: Jianan Gu
 * Creat: 22.04.24-10:22
 * Version: v1.0
 */
@Service
@AllArgsConstructor
public class TodoService {
    private TodoRepository todoRepository;

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }
    public Optional<Todo> findById(Long id) {
        return todoRepository.findById(id);
    }
    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }
    public void deleteById(Long id) {
        todoRepository.deleteById(id);
    }
}
