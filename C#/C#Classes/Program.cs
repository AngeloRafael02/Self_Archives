    // See https://aka.ms/new-console-template for more information
    // C# Classes Notes
    // By: RECIO, Angelo Rafael



namespace Angelo {
    class Program{
        class Dog {
            public string? name; //non Nullable field to be studied
            public int age;
            
        }
        static void Main(string[] args){
            Dog dog1 = new Dog();
            dog1.name = "pulong";
            dog1.age = 5;

            Console.WriteLine(dog1.name);
            Console.WriteLine(dog1.age);
        }
    }
}