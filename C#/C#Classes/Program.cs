    // See https://aka.ms/new-console-template for more information
    // C# Classes Notes
    // By: RECIO, Angelo Rafael



namespace Angelo {
    class Program{
        class Dog {
            public string? name; //non Nullable field to be studied
            public int age;
                public static string pet = "Pulong"; //static code are accessible in the class without using an object
            public Dog(){ //
                Console.WriteLine("Dog Constructor");
            }
            ~Dog(){ //DESTRUCTOR ( ~Method(){} ) - used when the program ends to close files/release memory
                Console.WriteLine("Dog Destructor used");
            }
            
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
        class Person{
            //variables for constructor
            private string name;
            public string Alias{ //PROPERTIES: accessed by its name just like any other public elements of the class
                get{ return name; } //get{} & set{} are their own blocks you can put code into
                set{ name = value; } //set, makes properties set by user
                //Auto-implemented Properties Syntax : public string Alias { get; set; }
            }
            public string immutablestring{
                get { return "Can't touch this";} //only a "get" in a property makes it "readonly" and cannot be mutated
            }
            private int age;
            private double weight;

            public Person(string username, int youth, double mass){ //CONSTRUCTORS: called when objects are created/initialized
                name = username;
                age = youth;
                weight = mass;
            }
            public string publicName(){
                return name;
            }
        }
        
    
            static void Main(string[] args){ //static member can be accessed directly using the class names without an object
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

                //CONSTRCUTORS
                Person p1 = new Person("Angelo",21,67.5);
                Console.WriteLine(p1.publicName());

                //PROPERTIES
                p1.Alias = "D";
                Console.WriteLine(p1.Alias);
                Console.WriteLine(p1.immutablestring);

                //DESTRUCTORS: useful for realeasing resources before coming out of the program (closing files,releasing memory etc.)

                //STATIC: static code are accessible in the class without using an object
                //static can also access static methods only
                Console.WriteLine(Dog.pet);
            }
    }
}