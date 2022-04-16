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
            private readonly string name = "john"; //READONLY: modifier the prevents a member of a class from being modified after construction
            public Person(string username, int youth, double mass){ //CONSTRUCTORS: called when objects are created/initialized
                this.name = username; //"this" keyword is is used inside the class and refers to the current instance of the class
                this.age = youth;
                this.weight = mass;
            }
            public string publicName(){
                return name;
            }
        }
        
            //static member can be accessed directly using the class names without an object
            //a static class can only contain static members, you cannot instantiate an object ofa  static class
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

                //Static methods and properties availble in C#
                //MATH
                    Console.WriteLine(Math.PI); //returns the PI constant
                    Console.WriteLine(Math.E); //Returns Natural logarithmic Base e
                 int num1 = 2;
                 int num2 = 20;
                    Console.WriteLine(Math.Max(num1,num2)); //returns highest value
                    Console.WriteLine(Math.Min(num1,num2)); //returns lowest value
                    Console.WriteLine(Math.Abs(-420)); //returns absolute value 
                    Console.WriteLine(Math.Sin(35)); //returns the sine of a value
                    Console.WriteLine(Math.Cos(35)); //returns the cosine of a value
                    Console.WriteLine(Math.Pow(2,5)); //returns the power of a value with its exponenet as a second argument
                    Console.WriteLine(Math.Round(123.76)); //return the decimal value rounded to the nearest integer
                    Console.WriteLine(Math.Sqrt(16)); //returns the square root of a value
                //ARRAY
                int[] arr = {2,3,1,4};
                    Array.Reverse(arr); //arr = {4,1,3,2}
                    Array.Sort(arr);    //arr = {1,2,3,4}
                //STRING
                string s1 = "some text";
                string s2 = "another text";
                    String.Concat(s1,s2); //combines the string
                    String.Equals(s1,s2); //returns if equal, (false)
                //DATETIME
                DateTime localDate = DateTime.Now;   //represents the current date & time
                    Console.WriteLine(localDate);
                DateTime Today = DateTime.Today; //represents the current day
                    Console.WriteLine(Today);
                
            }
    }
}