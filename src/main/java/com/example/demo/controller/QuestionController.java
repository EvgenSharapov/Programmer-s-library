package com.example.demo.controller;

import com.example.demo.dto.QuestionRequest;
import com.example.demo.entity.Question;
import com.example.demo.repository.QuestionRepository;
import com.example.demo.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    // Метод для создания вопроса
    @PostMapping
    public Question createQuestion(@RequestBody QuestionRequest request) {
        Question question = new Question();
        question.setText(request.getText());
        question.setOptions(request.getOptions());
        question.setCorrectAnswerIndex(request.getCorrectAnswerIndex());

        // Сохраняем вопрос в базу данных
        return questionRepository.save(question);

    }

    // Метод для получения всех вопросов
    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }


}