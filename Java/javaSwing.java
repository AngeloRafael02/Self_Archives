/* Java Swing Notes
 * BY: Angelo Rafael Recio
 * Source: https://www.javatpoint.com/java-swing
 */ 
import javax.swing.*; 

public class javaSwing {
    public static void main(String[] args) {  
        JFrame f = new JFrame(); //This is to create an instance of JFrame

        JButton button1 = new JButton("Click"); //instantiates a new button
        button1.setBounds(130,100,100,40);

        f.add(button1); //adds button to frame
        f.setSize(500,500);

        f.setLayout(null); //set to no layout manager (To be studied more)
        f.setVisible(true); //set the frame to be visible
    }
    
}
