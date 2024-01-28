package macedonia.winery.mkwine.controller;

import lombok.AllArgsConstructor;
import macedonia.winery.mkwine.model.User;
import macedonia.winery.mkwine.model.dto.UserDto;
import macedonia.winery.mkwine.model.dto.UserLikeDto;
import macedonia.winery.mkwine.service.UserService;
import macedonia.winery.mkwine.service.impl.UserServiceImpl;
import org.springframework.http.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
@AllArgsConstructor
public class UserController {
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

    @PostMapping("/user/register")
    User registerUser(@RequestBody UserDto userDto){
        return userService.registerUser(userDto);
    }

}
