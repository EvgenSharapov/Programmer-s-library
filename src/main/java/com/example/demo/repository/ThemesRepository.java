package com.example.demo.repository;

import com.example.demo.entity.Question;
import com.example.demo.entity.Themes;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ThemesRepository extends JpaRepository<Themes, Long> {
    List<Themes> findByTopicId(Long topicId); // Метод для поиска вопросов по ID темы
}