package com.example.microserviceforlogin.service;

import com.example.microserviceforlogin.model.Dto.UserDto;
import com.example.microserviceforlogin.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    User loginUser(UserDto userDto);
}