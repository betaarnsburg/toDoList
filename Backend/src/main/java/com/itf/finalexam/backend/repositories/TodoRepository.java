package com.itf.finalexam.backend.repositories;

import com.itf.finalexam.backend.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * ... Todos in einer Datenbank speichern können
 */
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
