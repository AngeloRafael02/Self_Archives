

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
    public void makeSound(){
        System.out.println("Grrrr");
    }
}
/*
 * Polymorphism, which refers to the idea of "having many forms", occurs when there is a 
 * hierarchy of classes related to each other through inheritance. TLDR: one method, many different implementations
 */
class Dog extends Animal {
    Dog() {
        legs = 4;
    }
    public void makeSound(){
        System.out.println("Woof!");
    }
}
class Cat extends Animal {
    //OVERRIDING: When a subclass defines the behavior of the parents methods with new expressions
    public void makeSound(){
        System.out.println("Meow!");
    }
    // 
    /*Rules for Overriding:
     * Should have the same return type and arguments
     * The access level cannot be more restrictive than the overridden method's access level 
     * A method declared final or static cannot be overridden
     * If a method cannot be inherited, it cannot be overridden
     * Constructors cannot be overridden
     */
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

    // OVERLOADING: When methods have the same name, but different parameters. Here, we overload the adds method to work with other data types
    int adds(int a, int b){
        return a + b;
    }
    double adds(double a, double b){
        return a + b;
    }

    public static void main(String[] args){
        System.out.print(balance);
        System.out.println(deposit(10));

        Dog d = new Dog();
        d.eat();

        Animal a = new Dog();
        Animal b = new Cat();
        a.makeSound();
        b.makeSound();
    }
}