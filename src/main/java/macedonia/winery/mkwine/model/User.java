package macedonia.winery.mkwine.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class User {
    String username;
    List<Winery> likedWineries;
}
