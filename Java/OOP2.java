//FURTHER NOTES ON CLASSES


/*ENCAPSULATION
 * The idea behind encapsulation is to ensure that implementation details are not visible to users. The variables of one class will be hidden from the other classes, 
 * accessible only through the methods of the current class. This is called data hiding.
 */
public class OOP2{
    private static double balance = 0;
    public static double deposit(double x){
        if(x>0){
            balance += x;
            
        }
        return balance;
    }
    public static void main(String[] args){
        System.out.print(balance);
        System.out.println(deposit(10));
    }
}