package com.example.microservicelikedwineries.repository;

import com.example.microservicelikedwineries.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findUserByUsernameAndPassword(String username, String password);
}
