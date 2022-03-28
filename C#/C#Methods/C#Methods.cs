﻿// See https://aka.ms/new-console-template for more information

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
        static void Main(string[] args){
            sayHi();//call a method to the main method
            sayHi();//can be done multiple times
            twice(2); //calls a function with an argumets to be used 
            Console.WriteLine(Power(3));
            Console.WriteLine(Power(2, 3));//default arguments can be override by new value

            int res = Area(w: 5, h: 8); //Arguments can be rearranged as long as assigned correctly
            Console.WriteLine(res);

        }
    }
}
