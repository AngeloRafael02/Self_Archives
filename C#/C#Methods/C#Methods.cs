// See https://aka.ms/new-console-template for more information

namespace Angelo{
    class Methods{
        static void sayHi(){ //Methods: function inside the class
            Console.WriteLine("Hello");
        }
        static void twice(int x){ //you can pass arguments to the method to process the inputs
            Console.WriteLine(x*2);
        }
        static void Main(string[] args){
            sayHi();//call a method to the main method
            sayHi();//can be done multiple times
            twice(2); //calls a function with an argumets to be used 
        }
    }
}
