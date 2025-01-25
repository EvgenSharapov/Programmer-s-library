package com.example.demo.service;

import com.example.demo.entity.Question;
import com.example.demo.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private final QuestionRepository<Question> questionRepository;

    @Autowired
    public QuestionService(QuestionRepository<Question> q) {
        this.questionRepository = q;
    }

    // Метод для сохранения вопроса
    public Question saveQuestion(Question question) {
        return questionRepository.save(question);
    }

    // Метод для получения всех вопросов
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    // Метод для получения вопроса по ID
    public Question getQuestionById(Long id) {
        return questionRepository.findById(id);
    }

    // Метод для удаления вопроса по ID
    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }
}