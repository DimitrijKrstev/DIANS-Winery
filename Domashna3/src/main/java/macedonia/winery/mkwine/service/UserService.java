package macedonia.winery.mkwine.service;

import macedonia.winery.mkwine.model.User;
import macedonia.winery.mkwine.model.dto.UserDto;
import macedonia.winery.mkwine.model.dto.UserLikeDto;
import org.springframework.web.bind.annotation.RequestBody;

public interface UserService {
    User likeWinery(UserLikeDto userLikeDto);
    User disslikeWinery(UserLikeDto userLikeDto);
    User registerUser(UserDto userDto);
}
