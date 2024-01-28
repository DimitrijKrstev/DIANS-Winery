package macedonia.winery.mkwine.bootstrap;

import org.springframework.stereotype.Component;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
@Component
public class Logger {

    private static Logger instance;

    private Logger(){
    }

    public static Logger getInstance(){
        synchronized(Logger.class){
            if(instance==null){
                instance = new Logger();
            }
        }
        return instance;
    }

    public void write(String data){
        System.out.println(data);
    }

}
