package com.example.demo.controller;

import com.example.demo.model.Question;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;
import java.util.List;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;


@Controller
public class TestController {

    private List<Question> questions = Arrays.asList(
            new Question("Какой язык программирования вы предпочитаете?",
                    new String[]{"Java", "Python", "JavaScript", "C++"}),
            new Question("Какой язык программирования вы предпочитаете?",
                    new String[]{"Java", "Python", "JavaScript", "C++"}),
            new Question("Какой фреймворк вам нравится?",
                    new String[]{"Spring", "Django", "React", "Vue"}),
            new Question("Какой тип данных используется для хранения целых чисел в Java?",
                    new String[]{"int", "float", "String", "boolean"}),
            new Question("Какой язык используется для стилизации веб-страниц?",
                    new String[]{"CSS", "HTML", "JavaScript", "PHP"}),
            new Question("Какой инструмент используется для управления зависимостями в Java?",
                    new String[]{"Maven", "Gradle", "npm", "pip"}),
            new Question("Какой язык программирования был создан Guido van Rossum?",
                    new String[]{"Python", "Java", "C++", "Ruby"}),
            new Question("Какой язык используется для написания сценариев на стороне сервера?",
                    new String[]{"PHP", "HTML", "CSS", "JavaScript"}),
            new Question("Какой язык программирования используется для разработки Android-приложений?",
                    new String[]{"Java", "Swift", "Kotlin", "C#"}),
            new Question("Какой язык программирования используется для разработки iOS-приложений?",
                    new String[]{"Swift", "Java", "Kotlin", "C++"}),
            new Question("Какой язык программирования используется для машинного обучения?",
                    new String[]{"Python", "Java", "C++", "Ruby"}),
            new Question("Какой язык программирования используется для создания игр на Unity?",
                    new String[]{"C#", "Java", "Python", "JavaScript"}),
            new Question("Какой язык программирования используется для создания динамических веб-страниц?",
                    new String[]{"JavaScript", "HTML", "CSS", "SQL"}),
            new Question("Какой язык программирования используется для работы с базами данных?",
                    new String[]{"SQL", "Python", "Java", "C++"}),
            new Question("Какой язык программирования используется для создания скриптов в Linux?",
                    new String[]{"Bash", "Python", "Java", "C++"}),
            new Question("Какой язык программирования используется для создания блокчейн-приложений?",
                    new String[]{"Solidity", "Java", "Python", "C++"}),
            new Question("Какой язык программирования используется для создания мобильных приложений на Flutter?",
                    new String[]{"Dart", "Java", "Kotlin", "Swift"}),
            new Question("Какой язык программирования используется для создания десктопных приложений на Windows?",
                    new String[]{"C#", "Java", "Python", "Ruby"}),
            new Question("Какой язык программирования используется для создания веб-приложений на Ruby on Rails?",
                    new String[]{"Ruby", "Python", "Java", "PHP"}),
            new Question("Какой язык программирования используется для создания игр на Unreal Engine?",
                    new String[]{"C++", "Java", "Python", "C#"}),
            new Question("Какой язык программирования используется для создания скриптов в Docker?",
                    new String[]{"YAML", "Python", "Java", "Bash"}),
            new Question("Какой язык программирования используется для создания скриптов в Kubernetes?",
                    new String[]{"YAML", "Python", "Java", "Bash"}),
            new Question("Какой язык программирования используется для создания скриптов в Ansible?",
                    new String[]{"YAML", "Python", "Java", "Bash"})
    );
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
        Integer currentQuestionIndex = (Integer) session.getAttribute("currentQuestionIndex");
        if (currentQuestionIndex == null) {
            currentQuestionIndex = 0;
            session.setAttribute("currentQuestionIndex", currentQuestionIndex);
        }

        if (currentQuestionIndex < questions.size()) {
            Question currentQuestion = questions.get(currentQuestionIndex);
            model.addAttribute("question", currentQuestion);
            model.addAttribute("questionNumber", currentQuestionIndex + 1);
            model.addAttribute("totalQuestions", questions.size());
            return "test";
        } else {
            return "result";
        }
    }

    @PostMapping("/test")
    public String handleAnswer(@RequestParam String answer, HttpSession session) {
        System.out.println("Ответ: " + answer);

        Integer currentQuestionIndex = (Integer) session.getAttribute("currentQuestionIndex");
        session.setAttribute("currentQuestionIndex", currentQuestionIndex + 1);

        return "redirect:/test";
    }

    @GetMapping("/reset")
    public String resetTest(HttpSession session) {
        session.setAttribute("currentQuestionIndex", 0);
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