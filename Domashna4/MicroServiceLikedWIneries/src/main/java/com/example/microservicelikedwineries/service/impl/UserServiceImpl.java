package com.example.microservicelikedwineries.service.impl;

import com.example.microservicelikedwineries.model.User;
import com.example.microservicelikedwineries.model.Winery;
import com.example.microservicelikedwineries.model.dto.UserLikeDto;
import com.example.microservicelikedwineries.repository.UserRepository;
import com.example.microservicelikedwineries.repository.WineryRepository;
import com.example.microservicelikedwineries.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final WineryRepository wineryRepository;

    public UserServiceImpl(UserRepository userRepository, WineryRepository wineryRepository) {
        this.userRepository = userRepository;
        this.wineryRepository = wineryRepository;
    }

    @Override
    public User likeWinery(UserLikeDto userLikeDto) {
        User user = userRepository.findById(Long.valueOf(userLikeDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.valueOf(userLikeDto.getWineryId())).orElse(null);
        user.getLikedWineries().add(winery);
        return userRepository.save(user);
    }

    @Override
    public User disslikeWinery(UserLikeDto userLikeDto) {
        User user = userRepository.findById(Long.valueOf(userLikeDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.valueOf(userLikeDto.getWineryId())).orElse(null);
        user.getLikedWineries().remove(winery);
        return userRepository.save(user);
    }
}
