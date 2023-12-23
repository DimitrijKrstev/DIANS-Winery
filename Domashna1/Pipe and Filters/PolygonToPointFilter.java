import java.util.LinkedList;
import java.util.List;

public class PolygonToPointFilter implements Filter<List<String>> {
    @Override
    public List<String> execute(List<String> input) {
        for (int i = 0; i < input.size(); ++i) {
            String line = input.get(i);
            if (!line.contains("\"type\": \"Polygon\"")) continue;

            //Skip needed coordinates line
            input.set(i++, line.replace("Polygon", "Point"));

            List<Float> latitudes = new LinkedList<>();
            List<Float> longitudes = new LinkedList<>();
            String nextLine = input.get(++i);

            while (!nextLine.contains("}")) {
                input.remove(i);
                try {
                    latitudes.add(Float.parseFloat(nextLine.replace(",", "")));
                    longitudes.add(Float.parseFloat(input.get(i)));
                    input.remove(i);
                }
                catch(Exception ignored){}
                nextLine = input.get(i);
            }

            float centroidLatitude = (float) (latitudes.stream().mapToDouble(Float::floatValue).sum() / latitudes.size());
            float centroidLongitude = (float) longitudes.stream().mapToDouble(Float::floatValue).sum() / longitudes.size();

            input.add(i, "          " + centroidLatitude + ",");
            input.add(++i, "          " + centroidLongitude);
            input.add(++i, "        ]");
        }
        return input;
    }
}
