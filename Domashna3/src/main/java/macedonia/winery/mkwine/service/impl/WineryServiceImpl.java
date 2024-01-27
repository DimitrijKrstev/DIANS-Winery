package macedonia.winery.mkwine.service.impl;

import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.model.dto.WineryCommentDto;
import macedonia.winery.mkwine.model.dto.WineryIdDto;
import macedonia.winery.mkwine.repository.CommentRepository;
import macedonia.winery.mkwine.repository.WineryRepository;
import macedonia.winery.mkwine.service.WineryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WineryServiceImpl implements WineryService {
    private final WineryRepository wineryRepository;
    private final CommentRepository commentRepository;

    public WineryServiceImpl(WineryRepository wineryRepository, CommentRepository commentRepository) {
        this.wineryRepository = wineryRepository;
        this.commentRepository = commentRepository;
    }

    @Override
    public List<Winery> listAllWineries() {
       return wineryRepository.findAll();
    }

    @Override
    public List<Comment> listComments(WineryIdDto wineryIdDto) {
        Winery winery = wineryRepository.findById(Long.parseLong(wineryIdDto.getWineId())).orElse(null);
        if(winery != null){
            return winery.getCommentList();
        }
        return null;
    }

    @Override
    public Winery addComment(WineryCommentDto wineryCommentDto) {
        Winery winery = wineryRepository.findById(Long.parseLong(wineryCommentDto.getWineryId())).orElse(null);
        Comment comment = Comment.builder().text(wineryCommentDto.getText()).build();
        winery.getCommentList().add(comment);
        commentRepository.save(comment);
        return wineryRepository.save(winery);
    }
}
