package macedonia.winery.mkwine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
@EnableMethodSecurity
public class DiansWineryApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiansWineryApplication.class, args);
    }

}
