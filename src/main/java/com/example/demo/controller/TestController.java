package com.example.demo.controller;
import com.example.demo.entity.Question;
import com.example.demo.service.QuestionService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
            List<com.example.demo.entity.Question> questions = questionService.getAllQuestions();



            Integer currentQuestionIndex = (Integer) session.getAttribute("currentQuestionIndex");
            if (currentQuestionIndex == null) {
                currentQuestionIndex = 0;
                session.setAttribute("currentQuestionIndex", currentQuestionIndex);
            }

//            Double percentage = (Double) session.getAttribute("percentage");
//            if (percentage == null) {
//                percentage = 0D;
//                session.setAttribute("correctAnswers", percentage);
//            }



//            Integer correctAnswers = (Integer) session.getAttribute("correctAnswers");
//            if (correctAnswers == null) {
//                correctAnswers = 0;
//                session.setAttribute("correctAnswers", correctAnswers);
//            }



            if (currentQuestionIndex < questions.size()) {
                Question currentQuestion = questions.get(currentQuestionIndex);
                model.addAttribute("question", currentQuestion);
                model.addAttribute("questionNumber", currentQuestionIndex + 1);
                model.addAttribute("totalQuestions", questions.size());
//                model.addAttribute("correctAnswers", correctAnswers);
//                model.addAttribute("percentage", percentage);


                return "test";
            } else {
                return "result";
            }
        }

        @PostMapping("/test")
        public String handleAnswer(@RequestParam String answer, HttpSession session) {
            System.out.println("Ответ: " + answer);
//            Integer correctAnswers = (Integer) session.getAttribute("correctAnswers");
//            Double percentage = (Double) session.getAttribute("percentage");
            if(answer.equals("A) Java Development Kit")){
//                session.setAttribute("correctAnswers",correctAnswers+1);

            }
//            System.out.println(correctAnswers);
//            System.out.println(percentage);
            Integer currentQuestionIndex = (Integer) session.getAttribute("currentQuestionIndex");
            session.setAttribute("currentQuestionIndex", currentQuestionIndex + 1);

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