package com.example.demo.controller;
import com.example.demo.dto.TopicRequest;
import com.example.demo.entity.Topic;
import com.example.demo.entity.TopicArea;
import com.example.demo.repository.TopicRepository;
import com.example.demo.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.Objects.isNull;

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

//
//    // Метод для создания вопроса
//    @PostMapping
//    public Topic createTopic(@RequestBody TopicRequest request) {
//
////        Topic topic = new Topic();
////        topic.setTableOfContents(request.getTableOfContents());
////        topic.setContent(request.getContent());
////        topic.setTopicArea(TopicArea.OOP);
//
//        // Сохраняем в базу данных
//        return topicService.saveTopic(request.getTableOfContents(),request.getContent(),TopicArea.OOP);
//
//    }


    @PostMapping
    public Topic createTopic(@RequestBody TopicRequest info) {
        System.out.println(info.tableOfContents+info.content+info.topicArea);

        Topic topic = topicService.createTopic(info.tableOfContents, info.content,TopicArea.OOP);
        return topic;
    }

//    private static TopicRequest toTaskInfo(Topic topic) {
//        if (isNull(topic)) return null;
//
//        TopicRequest result = new TopicRequest();
//        result.content = topic.getContent();
//        result.tableOfContents = topic.getTableOfContents();
//        result.topicArea = topic.getTopicArea();
//        System.out.println(topic.getTopicArea());
//        return result;
//    }



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
