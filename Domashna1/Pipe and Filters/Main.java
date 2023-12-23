import macedonia.winery.mkwine.fileManager.FileManager;

import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<String> content = FileManager.getContent("../input.json");

        Pipe<List<String>> pipe = new Pipe<>();
        Filter<List<String>> InformationFilter = new InformationFilter();
        Filter<List<String>> PolygonFilter = new PolygonToPointFilter();
        pipe.addFilter(InformationFilter);
        pipe.addFilter(PolygonFilter);
        System.out.println("TEST");

        FileManager.writeOutput(pipe.runFilters(content), "Domashna1/output.json");
    }
}
