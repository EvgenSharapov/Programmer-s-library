package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Разрешаем запросы к /api
                .allowedOrigins("http://localhost:5500") // Укажите домен фронтенда
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Разрешаемые методы
                .allowedHeaders("*") // Разрешаем все заголовки
                .allowCredentials(true); // Разрешаем передачу куки и авторизационных данных
    }
}