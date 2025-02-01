package com.example.demo.dto;

import com.example.demo.entity.TopicArea;

import java.util.List;

public class TopicRequest {
    private String tableOfContents;

    private String content;

    private TopicArea topicArea;

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