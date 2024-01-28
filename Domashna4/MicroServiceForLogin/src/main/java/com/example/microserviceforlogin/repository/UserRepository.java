package com.example.microserviceforlogin.repository;

import com.example.microserviceforlogin.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
     User findUserByUsernameAndPassword(String username, String password);
}
