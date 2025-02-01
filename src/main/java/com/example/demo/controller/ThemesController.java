package com.example.demo.controller;

import com.example.demo.entity.Themes;
import com.example.demo.service.ThemesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/themes")
public class ThemesController {

    @Autowired
    private ThemesService themesService;

    @GetMapping("/by-topic/{topicId}")
    public List<Themes> getQuestionsByTopicId(@PathVariable Long topicId) {
        return themesService.getThemesByTopicId(topicId);
    }
}