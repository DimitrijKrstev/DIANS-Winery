package com.example.microserviceforlogin.controller;

import com.example.microserviceforlogin.model.Dto.UserDto;
import com.example.microserviceforlogin.model.User;
import com.example.microserviceforlogin.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
public class UserController {

    UserService userService;

    @PostMapping("/user/login")
    @Transactional(readOnly = true)
    public ResponseEntity<?> loginUser(@RequestBody UserDto userDto){
        System.out.println(userDto);
        System.out.println(userDto.getUsername());
        System.out.println(userDto.getPassword());
        User user = userService.loginUser(userDto);
        System.out.println(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
