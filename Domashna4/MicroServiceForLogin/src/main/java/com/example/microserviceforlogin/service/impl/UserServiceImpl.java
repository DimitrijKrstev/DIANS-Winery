package com.example.microserviceforlogin.service.impl;

import com.example.microserviceforlogin.model.Dto.UserDto;
import com.example.microserviceforlogin.model.User;
import com.example.microserviceforlogin.repository.UserRepository;
import com.example.microserviceforlogin.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public User loginUser(UserDto userDto) {
        User user = userRepository.findUserByUsernameAndPassword(userDto.getUsername(), userDto.getPassword());
        return user;
    }
}
