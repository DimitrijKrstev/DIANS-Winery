package macedonia.winery.mkwine.controller;

import lombok.AllArgsConstructor;
import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.dto.UserDto;
import macedonia.winery.mkwine.model.dto.WineryCommentDto;
import macedonia.winery.mkwine.model.dto.WineryIdDto;
import macedonia.winery.mkwine.model.User;
import macedonia.winery.mkwine.model.Wine;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.repository.CommentRepository;
import macedonia.winery.mkwine.repository.UserRepository;
import macedonia.winery.mkwine.repository.WineRepository;
import macedonia.winery.mkwine.repository.WineryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@AllArgsConstructor
// To be split into multiple controllers following SOLID principles
public class MainController {
    CommentRepository commentRepository;
    UserRepository userRepository;
    WineRepository wineRepository;
    WineryRepository wineryRepository;

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/wines/getAll")
    List<Wine> getAllWines(){
        return wineRepository.findAll();
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/wineries/getAll")
    List<Winery> getAllWineries(){
        return wineryRepository.findAll();
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/wineries/getComments")
    // To be changed to service logic
    List<Comment> getCommentsForWinery(@RequestBody WineryIdDto wineryIdDto){
        Winery winery = wineryRepository.findById(Long.parseLong(wineryIdDto.getWineId())).orElse(null);
        if(winery != null){
            return winery.getCommentList();
        }
        return null;
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PutMapping("/wineries/addComment")
    public Winery addComment(@RequestBody WineryCommentDto wineryCommentDto) {
        System.out.println(wineryCommentDto.getUserId());
        User user = userRepository.findById(Long.parseLong(wineryCommentDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.parseLong(wineryCommentDto.getWineryId())).orElse(null);
        Comment comment = commentRepository.save(Comment.builder()
                .author(user)
                .text(wineryCommentDto.getText()).build());
        user.getComments().add(comment);
        winery.getCommentList().add(comment);
        return wineryRepository.save(winery);
    }

    @PostMapping("/user/register")
    // To be changed to service logic
    User registerUser(@RequestBody UserDto userDto){
        User newUser = User.builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword()).build();

        return userRepository.save(newUser);
    }

    @PostMapping("/user/login")
    @Transactional(readOnly = true)
    // To be changed to Service logic
    public ResponseEntity<?> loginUser(@RequestBody UserDto userDto){
        System.out.println(userDto);
        System.out.println(userDto.getUsername());
        System.out.println(userDto.getPassword());
        User user = userRepository.findUserByUsernameAndPassword(userDto.getUsername(), userDto.getPassword());
        System.out.println(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
        // return new ResponseEntity<>("UserNotFound", HttpStatus.NOT_FOUND);
    }

}
