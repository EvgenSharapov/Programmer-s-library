package com.example.demo.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "topic_library")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "themes")
    private String tableOfContents;

    @Lob
    @Column(name = "content")
    private String content;

    @Enumerated(EnumType.ORDINAL) // Сохраняем Enum как строку в базе данных
    @Column(name = "topic_area")
    private TopicArea topicArea;


    public Topic() {
    }

    public Topic(String tableOfContents, String content ,TopicArea topicArea) {
        this.tableOfContents = tableOfContents;
        this.content = content;
        this.topicArea = topicArea;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTableOfContents() {
        return tableOfContents;
    }

    public void setTableOfContents(String tableOfContents) {
        this.tableOfContents = tableOfContents;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public TopicArea getTopicArea() {
        return topicArea;
    }

    public void setTopicArea(TopicArea topicArea) {
        this.topicArea = topicArea;
    }
}