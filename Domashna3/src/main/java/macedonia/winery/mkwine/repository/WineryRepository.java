package macedonia.winery.mkwine.repository;

import macedonia.winery.mkwine.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WineryRepository extends JpaRepository<Winery, Long> {
}
