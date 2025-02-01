package com.example.demo.service;


import com.example.demo.entity.Themes;
import com.example.demo.repository.ThemesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ThemesService {

    @Autowired
    private ThemesRepository themesRepository;

    public List<Themes> getThemesByTopicId(Long topicId) {
        return themesRepository.findByTopicId(topicId);
    }
}