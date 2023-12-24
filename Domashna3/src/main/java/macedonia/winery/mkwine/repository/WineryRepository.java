package macedonia.winery.mkwine.repository;

import macedonia.winery.mkwine.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WineryRepository extends JpaRepository<Winery, Long> {
    Optional<Winery> findByName(String name);
}
