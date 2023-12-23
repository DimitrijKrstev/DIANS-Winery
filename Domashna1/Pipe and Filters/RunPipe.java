import java.util.List;
import

public class RunPipe {
    public static void main(String[] args) {

        List<String> content = FileManager.getContent("src/main/resources/input.json");

        Pipe<List<String>> pipe = new Pipe<>();
        Filter<List<String>> InformationFilter = new InformationFilter();
        Filter<List<String>> PolygonFilter = new PolygonToPointFilter();
        pipe.addFilter(InformationFilter);
        pipe.addFilter(PolygonFilter);
        System.out.println("TEST");

        FileManager.writeOutput(pipe.runFilters(content), "src/main/resources/output.json");
    }
}
