package macedonia.winery.mkwine.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Wine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @ManyToMany
    List<Winery> wineries;

    @Lob
    @Column(columnDefinition = "TEXT")
    @Basic(fetch = FetchType.EAGER)
    String url;

    public Wine(String name, List<Winery> wineries,String url) {
        this.name = name;
        this.wineries = wineries;
        this.url=url;
    }
}
