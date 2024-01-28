package com.example.microservicelikedwineries.controller;


import com.example.microservicelikedwineries.model.User;
import com.example.microservicelikedwineries.model.dto.UserLikeDto;
import com.example.microservicelikedwineries.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@AllArgsConstructor
public class UserLikesWIneryController {
    UserService userService;

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PostMapping("/user/likeWinery")
    @Transactional
    public User likeWinery(@RequestBody UserLikeDto userLikeDto){
        return userService.likeWinery(userLikeDto);
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PostMapping("/user/dislikeWinery")
    @Transactional
    public User dislikeWinery(@RequestBody UserLikeDto userLikeDto) {
        return userService.disslikeWinery(userLikeDto);
    }
}
