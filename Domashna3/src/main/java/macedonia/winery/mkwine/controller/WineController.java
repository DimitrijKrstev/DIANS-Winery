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
import macedonia.winery.mkwine.service.UserService;
import macedonia.winery.mkwine.service.WineService;
import macedonia.winery.mkwine.service.WineryService;
import macedonia.winery.mkwine.service.impl.WineServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@AllArgsConstructor
public class WineController {

     WineService wineService;

    @CrossOrigin(maxAge = 3600)
    @GetMapping("/wines/getAll")
    List<Wine> getAllWines(){
       return wineService.listAllWines();
    }


}
