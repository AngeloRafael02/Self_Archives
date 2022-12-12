package fileHandling;
import java.io.File;
import java.util.Scanner;
public class fileHandling {
    public static void main(String[] args) {
        try {
            //Fetching File
            File file = new File("C:\\Users\\BADET\\Documents\\VSCODE\\Self_Archives\\Java\\fileHandling\\db.txt");
            if (file.exists()){
            System.out.println(file.getName());

            //Reading File
            Scanner sc = new Scanner(file);
            while(sc.hasNext()) {
                System.out.println(sc.next());
              }
            sc.close();
        }
        } catch (Exception e) { //Cathc can be used incase the file does not Exist
            System.out.println(e);
        
    }
}
