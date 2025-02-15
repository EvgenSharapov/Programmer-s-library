package com.example.demo.repository;
import com.example.demo.entity.Topic;
import com.example.demo.entity.TopicArea;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TopicRepository extends JpaRepository<Topic, Long> {
    List<Topic> findByTopicArea(TopicArea topicArea); // Метод для поиска тем по области

}