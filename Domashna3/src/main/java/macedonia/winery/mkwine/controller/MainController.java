package macedonia.winery.mkwine.controller;

import lombok.AllArgsConstructor;
import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.Dtos.WineryIdDto;
import macedonia.winery.mkwine.model.Wine;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.repository.CommentRepository;
import macedonia.winery.mkwine.repository.UserRepository;
import macedonia.winery.mkwine.repository.WineRepository;
import macedonia.winery.mkwine.repository.WineryRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@AllArgsConstructor
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
    List<Comment> getCommentsForWinery(@RequestBody WineryIdDto wineryIdDto){
        Winery winery = wineryRepository.findById(wineryIdDto.getWineId()).orElse(null);
        if(winery != null){
            return winery.getCommentList();
        }
        return null;
    }

}
