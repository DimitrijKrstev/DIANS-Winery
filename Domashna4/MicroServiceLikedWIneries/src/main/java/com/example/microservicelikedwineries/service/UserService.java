package com.example.microservicelikedwineries.service;

import com.example.microservicelikedwineries.model.User;
import com.example.microservicelikedwineries.model.dto.UserLikeDto;

public interface UserService {
    User likeWinery(UserLikeDto userLikeDto);
    User disslikeWinery(UserLikeDto userLikeDto);
}
