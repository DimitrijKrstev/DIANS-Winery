package com.example.microserviceforlogin.Bootstrap;

import com.example.microserviceforlogin.model.User;
import jakarta.annotation.PostConstruct;
import lombok.Getter;
import org.springframework.stereotype.Component;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Getter
@Component
public class DataHolder {
    public static List<User> users = new ArrayList<>();
    @PostConstruct
    public void init() throws SQLException {
        users.add(new User("loren12358","123"));
        users.add(new User("maca","123"));

    }
}