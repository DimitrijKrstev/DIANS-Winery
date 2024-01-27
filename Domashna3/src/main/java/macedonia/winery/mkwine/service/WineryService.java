package macedonia.winery.mkwine.service;

import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.Wine;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.model.dto.WineryCommentDto;
import macedonia.winery.mkwine.model.dto.WineryIdDto;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface WineryService {
    List<Winery> listAllWineries();
    List<Comment> listComments(WineryIdDto wineryIdDto);
    Winery addComment(WineryCommentDto wineryCommentDto);
}
