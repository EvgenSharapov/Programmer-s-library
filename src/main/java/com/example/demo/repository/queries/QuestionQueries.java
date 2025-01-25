package com.example.demo.repository.queries;

import com.example.demo.repository.QuestionRepository;

public class QuestionQueries {

    private QuestionQueries(){

    }

    public static final String SAVE_EMPLOYEE = """
            INSERT INTO employee(id, name, occupation, salary, age, joinDate) 
            VALUES (?,?,?,?,?,?)
            """;
}
