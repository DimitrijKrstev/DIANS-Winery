package macedonia.winery.mkwine.pipe;

import java.util.ArrayList;
import java.util.List;

public class Pipe<T> {
    private final List<Filter<T>> filters = new ArrayList<>();

    public void addFilter(Filter<T> filter){
        filters.add(filter);
    }

    public T runFilters(T input){
        for (Filter<T> filter: filters) {
            input = filter.execute(input);
        }
        return input;
    }
}
