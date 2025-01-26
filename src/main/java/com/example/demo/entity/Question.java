package com.example.demo.entity;

import jakarta.persistence.*;
import org.springframework.context.annotation.Bean;

import java.io.Serializable;
import java.util.List;

@Entity

public class Question implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text; // Текст вопроса

    @ElementCollection

    private List<String> options; // Варианты ответов

    private int correctAnswerIndex;// Индекс правильного ответа




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

    public Question setId(Long id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public Question setText(String text) {
        this.text = text;
        return this;
    }

    public List<String> getOptions() {
        return options;
    }

    public Question setOptions(List<String> options) {
        this.options = options;
        return this;
    }

    public int getCorrectAnswerIndex() {
        return correctAnswerIndex;
    }

    public Question setCorrectAnswerIndex(int correctAnswerIndex) {
        this.correctAnswerIndex = correctAnswerIndex;
        return this;
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