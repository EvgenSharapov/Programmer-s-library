package com.example.demo.service;
import com.example.demo.dto.TopicRequest;
import com.example.demo.entity.Topic;
import com.example.demo.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TopicService {

    private final TopicRepository topicRepository;

    @Autowired
    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    @PostMapping
    public Topic createTopic(@RequestBody TopicRequest request) {
        System.out.println("Получен запрос: " + request); // Логируем запрос
        return saveTopic(request.getTableOfContents(), request.getContent());
    }

    // Метод для сохранения вопроса
    public Topic saveTopic(String table, String content) {
        Topic topic = new Topic(table, content);
        return topicRepository.save(topic);
    }

    // Метод для получения всех вопросов
    public List<Topic> getAllTopics() {
        return topicRepository.findAll();

    }

    public Optional<Topic> getTopicById(Long id) {
        return topicRepository.findById(id);
    }

    public List<String> getAllTopicTitles() {
       return topicRepository.findAll().stream()
                .map(Topic::getTableOfContents) // Предполагаем, что заголовок хранится в поле tableOfContents
                .toList();

    }


}