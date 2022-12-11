package fileHandling;
import java.io.File;
public class fileHandling {
    public static void main(String[] args) {
        File file = new File("C:\\Users\\BADET\\Documents\\VSCODE\\Self_Archives\\Java\\fileHandling\\db.txt");
        if (file.exists()){
            System.out.println(file.getName());
        }
    }
}
