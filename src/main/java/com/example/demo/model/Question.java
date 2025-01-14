package com.example.demo.model;


public class Question {
    private String text;
    private String[] options;

    public Question(String text, String[] options) {
        this.text = text;
        this.options = options;
    }

    // Геттеры и сеттеры
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String[] getOptions() {
        return options;
    }

    public void setOptions(String[] options) {
        this.options = options;
    }
}