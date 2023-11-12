package macedonia.winery.mkwine.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Comment {
    User author;
    String text;
}
