package macedonia.winery.mkwine.service.impl;

import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.Wine;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.model.dto.WineryCommentDto;
import macedonia.winery.mkwine.model.dto.WineryIdDto;
import macedonia.winery.mkwine.repository.WineRepository;
import macedonia.winery.mkwine.service.WineService;
import macedonia.winery.mkwine.service.WineryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WineServiceImpl implements WineService {
    private final WineRepository wineRepository;

    public WineServiceImpl(WineRepository wineRepository) {
        this.wineRepository = wineRepository;
    }

    @Override
    public List<Wine> listAllWines() {
        return wineRepository.findAll();
    }
}
