package macedonia.winery.mkwine.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
// To set all entities to use Builder design pattern
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "winery_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    @OneToMany
    List<Comment> comments;
    @ManyToMany
    List<Winery> likedWineries;

    public User(String username, String password, List<Winery> likedWineries) {
        this.username = username;
        this.password = password;
        this.likedWineries = likedWineries;
    }
}
