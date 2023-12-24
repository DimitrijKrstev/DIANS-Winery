package macedonia.winery.mkwine.repository;

import macedonia.winery.mkwine.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findUserByUsernameAndPassword(String username, String password);
}
