package com.example.demo.service;

import com.example.demo.entity.Question;
import com.example.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    // Метод для сохранения вопроса
    public Question saveQuestion(String text, List<String> options, int correctAnswerIndex) {
        Question question = new Question(text, options, correctAnswerIndex);
        return questionRepository.save(question);
    }

    // Метод для получения всех вопросов
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}