package com.example.demo.controller;
import com.example.demo.dto.TopicRequest;
import com.example.demo.entity.Topic;
import com.example.demo.entity.TopicArea;
import com.example.demo.repository.TopicRepository;
import com.example.demo.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/topics")
public class TopicController {

    private final TopicService topicService;

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }


    // Метод для создания вопроса
    @PostMapping
    public Topic createTopic(@RequestBody TopicRequest request) {
        Topic topic = new Topic();
        topic.setTableOfContents(request.getTableOfContents());
        topic.setContent(request.getContent());

        // Сохраняем вопрос в базу данных
        return topicRepository.save(topic);

    }

    // Метод для получения всех тем
    @GetMapping
    public List<Topic> getAllTopic() {
        return topicService.getAllTopics();
    }

    // Метод для получения темы по ID
    @GetMapping("/{id}")
    public Topic getTopicById(@PathVariable Long id) {
        return topicService.getTopicById(id)
                .orElseThrow(() -> new RuntimeException("Тема не найдена")); // Обработка случая, если тема не найдена
    }

    @GetMapping("/titles")
    public List<String> getAllTopicTitles() {
        return topicService.getAllTopicTitles();
    }

    @GetMapping("/by-area/{topicArea}")
    public List<Topic> getTopicsByArea(@PathVariable TopicArea topicArea) {
        return topicService.getTopicsByArea(topicArea);
    }



}
