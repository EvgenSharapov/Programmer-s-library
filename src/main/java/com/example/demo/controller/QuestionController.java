package com.example.demo.controller;

import com.example.demo.dto.QuestionRequest;
import com.example.demo.entity.Question;
import com.example.demo.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    // Метод для создания вопроса
    @PostMapping
    public Question createQuestion(@RequestBody QuestionRequest request) {
        return questionService.saveQuestion(request.getText(), request.getOptions(), request.getCorrectAnswerIndex());
    }

    // Метод для получения всех вопросов
    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }


}