package com.itf.finalexam.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/**
 * In einem Todo ein Titel (task), eine Beschreibung (details), ein Datum (date) und
 * den Zustand (done -> fertig oder nicht fertig) speichern können
 * (wähle angemessene Datentypen für diese Attribute)
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    @Size(max = 20)
    private String task;
    @NotBlank
    private String details;
    private LocalDate date;
    private boolean completed;

}
