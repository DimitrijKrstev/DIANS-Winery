package macedonia.winery.mkwine.service.impl;

import macedonia.winery.mkwine.model.User;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.model.dto.UserDto;
import macedonia.winery.mkwine.model.dto.UserLikeDto;
import macedonia.winery.mkwine.repository.UserRepository;
import macedonia.winery.mkwine.repository.WineryRepository;
import macedonia.winery.mkwine.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final WineryRepository wineryRepository;
    public UserServiceImpl(UserRepository userRepository, WineryRepository wineryRepository) {
        this.userRepository = userRepository;
        this.wineryRepository = wineryRepository;
    }

    @Override
    public User likeWinery(UserLikeDto userLikeDto) {
        User user = userRepository.findById(Long.valueOf(userLikeDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.valueOf(userLikeDto.getWineryId())).orElse(null);
        user.getLikedWineries().add(winery);
        return userRepository.save(user);
    }

    @Override
    public User disslikeWinery(UserLikeDto userLikeDto) {
        User user = userRepository.findById(Long.valueOf(userLikeDto.getUserId())).orElse(null);
        Winery winery = wineryRepository.findById(Long.valueOf(userLikeDto.getWineryId())).orElse(null);
        user.getLikedWineries().remove(winery);
        return userRepository.save(user);
    }

    @Override
    public User registerUser(UserDto userDto) {
        User newUser = User.builder()
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .likedWineries(new ArrayList<>()).build();

        return userRepository.save(newUser);
    }

    @Override
    public User loginUser(UserDto userDto) {
        User user = userRepository.findUserByUsernameAndPassword(userDto.getUsername(), userDto.getPassword());
        return user;
    }
}
