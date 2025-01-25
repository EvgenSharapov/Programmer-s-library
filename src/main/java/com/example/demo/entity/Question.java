package com.example.demo.entity;

import jakarta.persistence.*;
import org.springframework.context.annotation.Bean;

import java.util.List;

@Entity

public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text; // Текст вопроса

    @ElementCollection
    private List<String> options; // Варианты ответов

    private int correctAnswerIndex; // Индекс правильного ответа

    // Конструкторы
    public Question() {
    }

    public Question(String text, List<String> options, int correctAnswerIndex) {
        this.text = text;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    // Геттеры и сеттеры
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public int getCorrectAnswerIndex() {
        return correctAnswerIndex;
    }

    public void setCorrectAnswerIndex(int correctAnswerIndex) {
        this.correctAnswerIndex = correctAnswerIndex;
    }

    @Override
    public String toString() {
        return "Question{" +
               "id=" + id +
               ", text='" + text + '\'' +
               ", options=" + options +
               ", correctAnswerIndex=" + correctAnswerIndex +
               '}';
    }
}