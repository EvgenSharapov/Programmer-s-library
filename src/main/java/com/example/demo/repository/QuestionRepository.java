package com.example.demo.repository;



public interface QuestionRepository<Question> {

    int save(Question q);

    int deleteById(Long id);

    int EditById(Long id);

    void findAll();

    void findById(Long id);
    // Дополнительные методы можно добавить здесь, если нужно
}