package macedonia.winery.mkwine.repository;

import macedonia.winery.mkwine.model.Winery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WineryRepository extends JpaRepository<Winery, Long> {

}
