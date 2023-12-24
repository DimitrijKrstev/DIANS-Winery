package macedonia.winery.mkwine.repository;

import macedonia.winery.mkwine.model.Wine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WineRepository extends JpaRepository<Wine, Long> {

}
