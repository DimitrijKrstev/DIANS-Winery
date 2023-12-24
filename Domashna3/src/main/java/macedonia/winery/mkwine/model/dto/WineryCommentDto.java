package macedonia.winery.mkwine.model.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class WineryCommentDto {
    String wineryId;
    String userId;
    String text;
}
