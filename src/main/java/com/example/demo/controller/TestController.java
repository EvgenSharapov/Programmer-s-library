package com.example.demo.controller;
import com.example.demo.entity.Question;
import com.example.demo.service.QuestionService;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Controller
public class TestController {



        @Autowired
        private QuestionService questionService;





    @GetMapping("/index")
        public String showMenu(Model model) {
            // Получаем информацию о текущем аутентифицированном пользователе
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName(); // Имя пользователя

            // Передаем имя пользователя в шаблон
            model.addAttribute("username", username);

            return "index"; // Главная страница с меню
        }



        @GetMapping("/test")
        public String showTest(HttpSession session, Model model) {

            List<Question> questions = (List<Question>) session.getAttribute("questions");

            if (questions == null) {
                // Если список вопросов еще не перемешан, получаем все вопросы и перемешиваем их
                questions = questionService.getAllQuestions();
                Collections.shuffle(questions);
                session.setAttribute("questions", questions);
            }

            for (Question question : questions) {
                Hibernate.initialize(question.getOptions());
            }


//            List<Question> questions = questionService.getAllQuestions();
//            Collections.shuffle(questions);


            Integer percentage = (Integer) session.getAttribute("percentage");
            if (percentage == null) {
                percentage = 0;
                session.setAttribute("percentage", percentage);
            }


            Integer currentQuestionIndex = (Integer) session.getAttribute("currentQuestionIndex");
            if (currentQuestionIndex == null) {
                currentQuestionIndex = 0;
                session.setAttribute("currentQuestionIndex", currentQuestionIndex);
            }



            Integer correctAnswers = (Integer) session.getAttribute("correctAnswers");
            if (correctAnswers == null) {
                correctAnswers = 0;
                session.setAttribute("correctAnswers", correctAnswers);
            }



            if (currentQuestionIndex < questions.size()) {
                Question currentQuestion = questions.get(currentQuestionIndex);
                System.out.println(currentQuestion.toString());
                Integer current = currentQuestion.getCorrectAnswerIndex();
                session.setAttribute("current",current);
                System.out.println(current);


                model.addAttribute("questions", questions);

                model.addAttribute("question", currentQuestion);
                model.addAttribute("questionNumber", currentQuestionIndex + 1);
                model.addAttribute("totalQuestions", questions.size());
                model.addAttribute("correctAnswers", correctAnswers);
                model.addAttribute("percentage", percentage);
                model.addAttribute("current", current);


                return "test";
            } else {
                return "result";
            }
        }

    @PostMapping("/test")
    public String handleAnswer(@RequestParam int answerNumber, HttpSession session) {
        System.out.println("Ответ: " + answerNumber);
        Integer correctAnswers = (Integer) session.getAttribute("correctAnswers");
        Integer current = (Integer) session.getAttribute("current");

        System.out.println("Правильный ответ: "+current);

        if(answerNumber== current){
            session.setAttribute("correctAnswers",correctAnswers+1);


        }
        correctAnswers= (Integer) session.getAttribute("correctAnswers");
        System.out.println(correctAnswers);
        Integer currentQuestionIndex = (Integer) session.getAttribute("currentQuestionIndex");
        session.setAttribute("currentQuestionIndex", currentQuestionIndex + 1);
        Integer percentage=100/(currentQuestionIndex+1)*correctAnswers;
        System.out.println(percentage);
        session.setAttribute("percentage",percentage);

        return "redirect:/test";
    }



        @GetMapping("/result")
        public String showResults(Model model, HttpSession session) {
            List<Question> questions = (List<Question>) session.getAttribute("questions");
            int correctAnswers = (int) session.getAttribute("correctAnswers");
            System.out.println(correctAnswers);
            int totalQuestions = questions.size();

            // Вычисление процента правильных ответов
            double percentage = (double) correctAnswers / totalQuestions * 100;
            System.out.println(percentage);
            model.addAttribute("correctAnswers", correctAnswers);
            model.addAttribute("totalQuestions", totalQuestions);
            model.addAttribute("percentage", percentage);

            return "result"; // Страница с результатами
        }


        @GetMapping("/reset")
        public String resetTest(HttpSession session) {
            session.setAttribute("currentQuestionIndex", 0);
            session.setAttribute("correctAnswers",0);
            return "redirect:/test";
        }
        @GetMapping("/logout-success")
        public String logoutSuccess() {
            return "logout"; // Страница подтверждения выхода
        }
        @GetMapping("/login")
        public String login() {
            return "login"; // Страница входа
        }
//    @GetMapping("/")
//    public String home() {
//        return "home"; // Главная страница
//    }

//    @GetMapping("/public")
//    public String publicPage() {
//        return "public"; // Публичная страница
//    }

//    @GetMapping("/private")
//    public String privatePage() {
//        return "private"; // Приватная страница
//    }

}