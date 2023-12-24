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
//        wineryRepository.save(new Winery("Попова Кула",22.2261, 41.410614,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Винарија Грков",22.128117, 41.315422,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Domaine Lepovo",22.034212, 41.517864,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Камник",21.490385, 42.007866,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Vinarija Stobi",21.936052, 41.581486,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Винарската визба КАРТАЛ",21.476423, 41.962433,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Семејна винарија „Захарчев“",22.004782, 41.43615,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Шато Сопот",21.7409905, 41.777774,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Бовин винарија",22.0915153, 41.4943704,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Тиквеш",21.4394921, 41.9940075,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Kamnik",21.4272901, 41.9950477,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Winery Temov",21.4358622, 42.0001818,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Сковин",21.4310531, 41.9956025,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("NemaIme",22.1940439, 41.737897,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Stobi Winery",21.4209535, 42.0000999,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("Château Sopot Winery",21.740898, 41.7774687,new ArrayList<Comment>(),new ArrayList<Wine>()));
//        wineryRepository.save(new Winery("monastery winery",20.877133, 41.1848848,new ArrayList<Comment>(),new ArrayList<Wine>()));
        ObjectMapper objectMapper = new ObjectMapper();
        File file=new File("Domashna1/output.json");
        try {
            Map<String, Object> resultMap = objectMapper.readValue(file, new TypeReference<Map<String, Object>>() {});

            // Get the content under the "features" key
            Object features = resultMap.get("features");

            if (features instanceof List) {
                List<Object> featuresList = (List<Object>) features;

                // Iterate through the list of features
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
                        System.out.println("Properties:");

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
