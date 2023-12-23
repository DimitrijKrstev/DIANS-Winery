package macedonia.winery.mkwine.fileManager;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class FileManager {

    static public List<String> getContent(String pathString){
        Path path = Paths.get(pathString);
        List<String> content = new ArrayList<>();

        try{
            content = Files.readAllLines(path);
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }

        return content;
    }

    static public void writeOutput(List<String> content, String pathString){
        try{
            FileWriter writer = new FileWriter(pathString);
            for(String line : content){
                writer.write(line);
                writer.write("\n");
            }
            writer.close();
        }
        catch(IOException e){
            System.out.println(e.getMessage());
        }

        System.out.println("Done writing to file " + pathString);
    }
}
