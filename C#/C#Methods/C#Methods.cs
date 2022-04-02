    // See https://aka.ms/new-console-template for more information
    // C# Method Notes
    // By: RECIO, Angelo Rafael

namespace Angelo{
    class Methods{
        static void sayHi(){ //Methods: function inside the class
            Console.WriteLine("Hello");
        }
        static void twice(int x){ //you can pass arguments to the method to process the inputs
            Console.WriteLine(x*2);
        }
        static int Power(int x,int y = 2){ //you can have default arguments in a method
            int result = 1;
            for (int i = 0; i<y;i++){
                result *= x;
            }
            return result;
        }
        static int Area(int h, int w){
            return h * w;
        }  
        static void Sqr(ref int x){ // we can pass copies of an memories address into a formal parameter
            x = x * x;
        }
        static void GetValues(out int x, out int y){ //we can also transfer data out of a method
            x = 69;
            y = 420;
        }

        //Overloaded Methods: method with the same num but different parameters
        static void print(int d ){
            Console.WriteLine("Value: "+ d + " ( Integer )");
        }
        static void print(string label, double d){
            Console.WriteLine(label + d);
        }

        //RECURSIVE FUNCTIONS: functions that call themselves
        static int factorial(int num){
            if (num == 1){
                return 1;
            }
            return num * factorial(num-1);
        }

            static void Main(string[] args){
                sayHi();//call a method to the main method
                sayHi();//can be done multiple times
                twice(2); //calls a function with an argumets to be used 
                Console.WriteLine(Power(3));
                Console.WriteLine(Power(2, 3));//default arguments can be override by new value

                int res = Area(w: 5, h: 8); //Arguments can be rearranged as long as assigned correctly
                Console.WriteLine(res);
                
                //PASSING BY REFERENCE
                int a = 3; // variable name is "a"
                Sqr(ref a); // "a"'s address is referenced to be used in a method that requires an "x" variable
                Console.WriteLine(a); //returns new value from being passed down and processed by references

                //PASSING BY OUTPUT
                int b,c; //initialized Variables
                GetValues(out b, out c); //calls a method's variables as values
                Console.WriteLine(b + " "+ c); //returns results
                
                //OVERLOADING METHODS: method with the same num but different parameters
                //A way of overloading methods id to make each method have different parameters it can detect which will be used depending on the number of arguments
                print(11);
                print("Average:", 89.95);
                
                //Callling Recursive Function   
                Console.WriteLine(factorial(5));
            }   
    }
}
