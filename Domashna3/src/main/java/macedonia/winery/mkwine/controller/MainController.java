package macedonia.winery.mkwine.controller;

import lombok.AllArgsConstructor;
import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.dto.UserDto;
import macedonia.winery.mkwine.model.dto.UserLikeDto;
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
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
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
    @Transactional(readOnly = true)
    public List<Winery> getAllWineries(){
        List<Winery> wineries = wineryRepository.findAll();
        System.out.println(wineries);
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
    @PostMapping("/user/likeWinery")
    public User likeWinery(@RequestBody UserLikeDto userLikeDto){
        User user = userRepository.findById(Long.valueOf(userLikeDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.valueOf(userLikeDto.getWineryId())).orElse(null);
        user.getLikedWineries().add(winery);

        return userRepository.save(user);
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PostMapping("/user/dislikeWinery")
    public User dislikeWinery(@RequestBody UserLikeDto userLikeDto) {
        User user = userRepository.findById(Long.valueOf(userLikeDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.valueOf(userLikeDto.getWineryId())).orElse(null);
        user.getLikedWineries().remove(winery);
        return userRepository.save(user);
    }

    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PostMapping("/wineries/addComment")
    public Winery addComment(@RequestBody WineryCommentDto wineryCommentDto) {
        Winery winery = wineryRepository.findById(Long.parseLong(wineryCommentDto.getWineryId())).orElse(null);
        Comment comment = Comment.builder().text(wineryCommentDto.getText()).build();
        winery.getCommentList().add(comment);
        commentRepository.save(comment);
        return wineryRepository.save(winery);
    }

    @PostMapping("/user/register")
    // To be changed to service logic
    User registerUser(@RequestBody UserDto userDto){
        User newUser = User.builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .likedWineries(new ArrayList<>()).build();

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
