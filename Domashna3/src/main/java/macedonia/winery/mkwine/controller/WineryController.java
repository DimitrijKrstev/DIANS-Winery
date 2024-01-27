package macedonia.winery.mkwine.controller;

import lombok.AllArgsConstructor;
import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.model.dto.WineryCommentDto;
import macedonia.winery.mkwine.model.dto.WineryIdDto;
import macedonia.winery.mkwine.service.WineryService;
import macedonia.winery.mkwine.service.impl.WineryServiceImpl;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@AllArgsConstructor
public class WineryController {
    WineryService wineryService;


    @CrossOrigin(maxAge = 3600)
    @GetMapping("/wineries/getAll")
    @Transactional(readOnly = true)
    public List<Winery> getAllWineries(){
        return wineryService.listAllWineries();
    }

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/wineries/getComments")
    List<Comment> getCommentsForWinery(@RequestBody WineryIdDto wineryIdDto){
        return wineryService.listComments(wineryIdDto);
    }


    @CrossOrigin(maxAge = 3600, origins = "http://localhost:3000")
    @PostMapping("/wineries/addComment")
    public Winery addComment(@RequestBody WineryCommentDto wineryCommentDto) {
        return wineryService.addComment(wineryCommentDto);
    }
}
