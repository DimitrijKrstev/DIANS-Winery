import java.util.List;

public class InformationFilter implements Filter<List<String>>{
    @Override
    public List<String> execute(List<String> input) {
        input.removeIf(line -> line.equals("country"));

        return input;
    }
}
