package macedonia.winery.mkwine.bootstrap;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.User;
import macedonia.winery.mkwine.model.Wine;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.repository.WineryRepository;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class DataHolder {

    private final WineryRepository wineryRepository;

    public DataHolder(WineryRepository wineryRepository) {
        this.wineryRepository = wineryRepository;
    }
    @PostConstruct
    public void init() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        File file=new File("Domashna1/output.json");
        try {
            Map<String, Object> resultMap = objectMapper.readValue(file, new TypeReference<Map<String, Object>>() {});

            Object features = resultMap.get("features");

            if (features instanceof List) {
                List<Object> featuresList = (List<Object>) features;

                for (Object feature : featuresList) {
                    Map<String, Object> featureMap = (Map<String, Object>) feature;
                    Map<String, Object> properties = (Map<String, Object>) featureMap.get("properties");
                    Map<String, Object> geometry = (Map<String, Object>) featureMap.get("geometry");
                    String name = null;
                    String website = null;
                    String phone = null;
                    String email = null;
                    String amenity = null;
                    if (properties != null) {

                        int k=0;
                        for (Map.Entry<String, Object> entry : properties.entrySet()) {
                            if(entry.getKey().contains("name") && k==0){
                                name=entry.getValue().toString();
                                k=1;
                            }
                            if(entry.getKey().contains("website")){
                                website=entry.getValue().toString();
                            }
                            if(entry.getKey().contains("phone")){
                                phone=entry.getValue().toString();
                            }
                            if(entry.getKey().contains("email")){
                                email=entry.getValue().toString();
                            }
                            if(entry.getKey().contains("amenity")){
                                amenity=entry.getValue().toString();
                            }

                        }
                    }
                    Double x=0.0;
                    Double y=0.0;
                    if (geometry != null) {
                        ArrayList<Double> arrayList= (ArrayList<Double>) geometry.get("coordinates");
                        x=arrayList.get(0);
                        y=arrayList.get(1);
                    }
                    wineryRepository.save(new Winery(name,website,phone,email,amenity,x,y,new ArrayList<Comment>(),new ArrayList<Wine>()));
                    }
                }

        } catch (IOException e) {
            e.printStackTrace();
        }


    }

}
