package macedonia.winery.mkwine;

import macedonia.winery.mkwine.fileManager.FileManager;
import macedonia.winery.mkwine.pipe.Filter;
import macedonia.winery.mkwine.pipe.InformationFilter;
import macedonia.winery.mkwine.pipe.PolygonToPointFilter;
import macedonia.winery.mkwine.pipe.Pipe;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class DiansWineryApplication {

    public static void main(String[] args) {

        List<String> content = FileManager.getContent("src/main/resources/input.json");

        Pipe<List<String>> pipe = new Pipe<>();
        Filter<List<String>> InformationFilter = new InformationFilter();
        Filter<List<String>> PolygonFilter = new PolygonToPointFilter();
        pipe.addFilter(InformationFilter);
        pipe.addFilter(PolygonFilter);

        FileManager.writeOutput(pipe.runFilters(content), "src/main/resources/output.json");

        SpringApplication.run(DiansWineryApplication.class, args);
    }

}
