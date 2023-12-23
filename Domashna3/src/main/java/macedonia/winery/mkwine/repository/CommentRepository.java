package macedonia.winery.mkwine.repository;

import macedonia.winery.mkwine.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
