package macedonia.winery.mkwine.bootstrap;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import macedonia.winery.mkwine.model.Comment;
import macedonia.winery.mkwine.model.User;
import macedonia.winery.mkwine.model.Wine;
import macedonia.winery.mkwine.model.Winery;
import macedonia.winery.mkwine.repository.UserRepository;
import macedonia.winery.mkwine.repository.WineRepository;
import macedonia.winery.mkwine.repository.WineryRepository;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Component
public class DataHolder {

    private final WineryRepository wineryRepository;
    private final ArrayList<String> urls;
    private final WineRepository wineRepository;
    private final UserRepository userRepository;

    public DataHolder(WineryRepository wineryRepository, ArrayList<String> urls, WineRepository wineRepository, UserRepository userRepository) {
        this.wineryRepository = wineryRepository;
        this.urls = urls;
        this.wineRepository = wineRepository;
        this.userRepository = userRepository;
    }
    @PostConstruct
    public void init() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        File file=new File("Domashna1/output.json");
        try {
            Map<String, Object> resultMap = objectMapper.readValue(file, new TypeReference<Map<String, Object>>() {});
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188516395760242780/Popova_Kula.jpg?ex=659acf26&is=65885a26&hm=8f1dbba4faed58e78e086a10a2281f2d0dab0e50db5291684d698d5773f03dd2&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188516656188764232/Vinarija_Grkov.png?ex=659acf64&is=65885a64&hm=05f03532ff9352081f5913d21f0f0c62f914069034df770f1e9738329f7dab3a&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188521861101932564/Domaine_Lepovo.jpg?ex=659ad43d&is=65885f3d&hm=39b18ba607b98db70f1399ac4b2ead1a52022a9fb99a7a28d7bc784d1974ef63&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188516932979261493/Kamnik.jpg?ex=659acfa6&is=65885aa6&hm=c9abe72fa8a6b60e34eb300a7f9a78e7291a1b87f41e9cc333738385bbbfcd27&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188517111648227378/Vinarija_Stobi.jpg?ex=659acfd0&is=65885ad0&hm=be72a51d4532f3be24bc07f219b3f8c2db39e0bbc824956eef42b54eb3dd5c6c&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188517357291835512/Kartal_Winery_.jpg?ex=659ad00b&is=65885b0b&hm=5fe0c2b1577a6c02554a4d9e1623920b8620c5bf46ec8b02c59913df4176f873&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188517524451639346/Zaharchev_Winery_and_Distillery.jpg?ex=659ad033&is=65885b33&hm=d255385a01b00b4f97c456379e6d989e9dd77b265e0eb3b8b119fdd755a12272&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188517727334318172/Chateau_Sopot_Winery.jpg?ex=659ad063&is=65885b63&hm=c665db168d8b546dfb22328a4b0b3c85fe34e6bb3679fc8f52607ddadf67a3cf&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188517954120339521/492873487b2747d5.jpg?ex=659ad099&is=65885b99&hm=842fc81c4568c4c642a3fa25875f106b2c793560db90ace3f88e1e3d0460f1d8&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188518396493578311/Tikves.jpg?ex=659ad103&is=65885c03&hm=671abd5136ccc2ab002085cf501c213cde3d0a453908198a73002dc4055562da&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188519000687267961/Kamnik_-_Copy.jpg?ex=659ad193&is=65885c93&hm=f9f64e71b95780291d5a78457038a4a53b0608e3d431a32ee35569e4c55710e6&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188520392248275035/sudowoodo180200024.jpg?ex=659ad2df&is=65885ddf&hm=efaa93dd157875d6c5e8dd2054b5794ee8095b0adbd9046aea3de78f5920859a&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188520574369149058/57a100f1cb8ce6f4.jpg?ex=659ad30a&is=65885e0a&hm=2b08bf4651f3ff6420d68be8226f27084cf754cb4048a40fac4322c892cf2a9f&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188520974589636619/Vinarija_Stobi_-_Copy.jpg?ex=659ad369&is=65885e69&hm=c85dfff2ead0f350885e004130efa48c57e66cfc8aeb283311ae389e4c37edc8&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188521139929096263/Chateau_Sopot_Winery_-_Copy.jpg?ex=659ad391&is=65885e91&hm=60c05916a8dd0218e0877f72fc8b9147da7609b37f7e91792659c0268e93ad6c&");
            urls.add("https://cdn.discordapp.com/attachments/1171082431676289045/1188521306459734116/monastery_winery.jpg?ex=659ad3b9&is=65885eb9&hm=0c6c9c53d168271c36711ee0354207ad6374625917181df9187bd5743cad1836&");

            Object features = resultMap.get("features");
            List<String> names=new ArrayList<>();

            if (features instanceof List) {
                List<Object> featuresList = (List<Object>) features;
                int b=0;
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

                        int k = 0;
                        for (Map.Entry<String, Object> entry : properties.entrySet()) {
                            if (entry.getKey().contains("name") && k == 0) {
                                name = entry.getValue().toString();
                                k = 1;
                            }
                            if (entry.getKey().contains("website")) {
                                website = entry.getValue().toString();
                            }
                            if (entry.getKey().contains("phone")) {
                                phone = entry.getValue().toString();
                            }
                            if (entry.getKey().contains("email")) {
                                email = entry.getValue().toString();
                            }
                            if (entry.getKey().contains("amenity")) {
                                amenity = entry.getValue().toString();
                            }

                        }
                    }
                    Double x = 0.0;
                    Double y = 0.0;
                    if (geometry != null) {
                        ArrayList<Double> arrayList = (ArrayList<Double>) geometry.get("coordinates");
                        x = arrayList.get(0);
                        y = arrayList.get(1);
                    }
                        if(name!=null) {
                            System.out.println(urls.get(b));
                            wineryRepository.save(new Winery(name, website, phone, email, amenity, x, y,urls.get(b), new ArrayList<Comment>(), new ArrayList<Wine>()));
                            b++;
                        }
                    names.add(name);
                }
            }
//            for(String i :names){
//                if(i!=null) {
//                    Winery winery =wineryRepository.findByName(i).orElse(null);
//                    if(winery!=null) winery.setUrl(urls.get(k));
//                    k++;
//                }
//            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        List<Winery> grupa1=new ArrayList<>();
        grupa1.add(wineryRepository.findById(14L).orElse(null));
        grupa1.add(wineryRepository.findById(12L).orElse(null));
        grupa1.add(wineryRepository.findById(3L).orElse(null));
        grupa1.add(wineryRepository.findById(4L).orElse(null));
        grupa1.add(wineryRepository.findById(9L).orElse(null));
        wineRepository.save(new Wine("Tga za Jug"));

        List<Winery> grupa2=new ArrayList<>();
        grupa2.add(wineryRepository.findById(13L).orElse(null));
        grupa2.add(wineryRepository.findById(7L).orElse(null));
        grupa2.add(wineryRepository.findById(8L).orElse(null));
        grupa2.add(wineryRepository.findById(5L).orElse(null));
        grupa2.add(wineryRepository.findById(10L).orElse(null));
        wineRepository.save(new Wine("Alexandria"));

        List<Winery> grupa3=new ArrayList<>();
        grupa3.add(wineryRepository.findById(11L).orElse(null));
        grupa3.add(wineryRepository.findById(2L).orElse(null));
        grupa3.add(wineryRepository.findById(6L).orElse(null));
        grupa3.add(wineryRepository.findById(1L).orElse(null));
        grupa3.add(wineryRepository.findById(15L).orElse(null));
        grupa3.add(wineryRepository.findById(16L).orElse(null));
        wineRepository.save(new Wine("Barovo"));

        wineRepository.save(new Wine("Terov"));

        wineRepository.save(new Wine("Stobi"));

        wineRepository.save(new Wine("BelaVoda"));

        wineRepository.save(new Wine("Kratoshija"));

        wineRepository.save(new Wine("Signatore"));

        userRepository.save(User.builder().username("dimi").password("dimi").likedWineries(Arrays.asList(wineryRepository.findById((long)1).orElse(null))).build());
    }

}
