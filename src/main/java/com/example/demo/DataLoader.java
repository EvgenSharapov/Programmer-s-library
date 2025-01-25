//package com.example.demo;
//
//import com.example.demo.entity.Question;
//import com.example.demo.service.QuestionService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import java.util.Arrays;
//
//@Component
//public class DataLoader implements CommandLineRunner {
//
//    private final QuestionService questionService;
//
//    @Autowired
//    public DataLoader(QuestionService questionService) {
//        this.questionService = questionService;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        // Создаём экземпляр вопроса
//        Question question = new Question()
//                .setText("Что такое JDK?")
//                .setOptions(Arrays.asList(
//                        "A) Java Development Kit",
//                        "B) Java Data Kit",
//                        "C) Java Document Kit",
//                        "D) Java Database Kit"
//                ))
//                .setCorrectAnswerIndex(0);
//
//        // Сохраняем вопрос в базу данных
//        questionService.saveQuestion(question.getText(),question.getOptions(),question.getCorrectAnswerIndex());
//
//        System.out.println("Вопрос успешно сохранён в базу данных!");
//    }
//}
