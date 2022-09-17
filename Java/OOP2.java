//FURTHER NOTES ON CLASSES

/* INHERITANCE is the process that enables one class to acquire the properties (methods and variables) of another.
 * With inheritance, the information is placed in a more manageable, hierarchical order.
 * NOTES: Private Methods cannot be inherited
 */
class Animal {
    protected int legs;
    public void eat() {
        System.out.println("Animal eats");
    }
}
class Dog extends Animal {
    Dog() {
        legs = 4;
    }
}

public class OOP2{
    /*ENCAPSULATION
    * The idea behind encapsulation is to ensure that implementation details are not visible to users. The variables of one class will be hidden from the other classes, 
    * accessible only through the methods of the current class. This is called data hiding.
    */
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

        Dog d = new Dog();
        d.eat();
    }
}