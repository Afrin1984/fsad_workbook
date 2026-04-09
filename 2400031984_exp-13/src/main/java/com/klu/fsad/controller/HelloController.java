package com.klu.fsad.controller;


import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class HelloController {

    @GetMapping("/api/message")
    public String message() {
        return "Hello from Backend!";
    }
}


