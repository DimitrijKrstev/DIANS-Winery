package macedonia.winery.mkwine.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Winery {
    List<Comment> commentList;
    List<Wine> wines;
}
