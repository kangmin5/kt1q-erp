package kr.kt1q.bangcash.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HomeController {
    @GetMapping("/")
    public String now(){
        System.out.println("여기가 홈입니다.");
        return new SimpleDateFormat("yyyy-MM-dd hh-mm-ss").format(new Date());
    }
}
