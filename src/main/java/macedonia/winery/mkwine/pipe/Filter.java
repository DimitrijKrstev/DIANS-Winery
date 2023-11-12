package macedonia.winery.mkwine.pipe;

public interface Filter<T> {
    T execute(T input);
}
