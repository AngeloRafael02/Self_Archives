    // See https://aka.ms/new-console-template for more information
    // C# Classes Notes
    // By: RECIO, Angelo Rafael



namespace Angelo {
    class Program{
        class Dog {
            public string? name; //non Nullable field to be studied
            public int age;
            
        }
        class BankAccount{
            //ENCAPSULATION: the idea of surrounding of entity for privacy
            //also called "Information Hiding"
            private double balance = 0; //"private" access modifier makes it only accessible only from within the class and hides it from the outside
            //private variable was only accessed via viewing of getDisplay(), and be modified only by Deposit() and Withdraw()
            public void Deposit(double n){
                balance += n;
            }
            public void Withdraw(double n){
                balance -= n;
            }
            public double getBalance(){
                return balance;
            }
        }
        static void Main(string[] args){
            Dog dog1 = new Dog();
            dog1.name = "pulong";
            dog1.age = 5;

            Console.WriteLine(dog1.name);
            Console.WriteLine(dog1.age);

            //ENCAPSULATION: the idea of surrounding of entity for privacy
            //also called "Information Hiding"
            BankAccount b = new BankAccount();
            b.Deposit(199);
            b.Withdraw(42);
            b.Deposit(13);
            Console.WriteLine(b.getBalance());
        }
    }
}