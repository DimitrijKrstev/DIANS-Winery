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
@Builder
@Table
public class Wine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;

    @Lob
    @Column(columnDefinition = "TEXT")
    @Basic(fetch = FetchType.EAGER)
    String url;

    public Wine(String name,String url) {
        this.name = name;
        this.url=url;
    }
}
