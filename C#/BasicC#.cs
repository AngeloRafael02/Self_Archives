// See https://aka.ms/new-console-template for more information
// C# Documentation
// By: RECIO, Angelo Rafael

//NOTE: Study dotnet commands in cmd

namespace Basics{
    class Program{
        static void Main(string[] args){
            /*Multi-Line 
            Comment*/
            int myAge = 20; //single Comment
            double pi = 3.14;
            char gura = 'a'; //char requires single quotes
            string name = "Angelo"; //strings require double quotes
            bool isDed = false;
            Console.WriteLine(myAge + pi + gura); //Console.WriteLine() - used for printing out outputs into the terminal
            Console.WriteLine(name + " is " + isDed + " happy.");
                //placeholders can be used in printing output, similar to string literals
            Console.WriteLine(" myAge = {0}, pi = {1}", myAge, pi); //don't forget to reference the variable/s used
                //you can put as much placeholders as you need ({3},{4},...)
            
                //Input Methods
            string temp;
            temp = Console.ReadLine(); //takes inputs 
            Console.WriteLine(temp);            
            
            int Age = Convert.ToInt32(Console.ReadLine()); //way to take intergers
            Console.Write("He is {0} years old.", Age);
                //Other Convert.To___ functions:
                //Convert.ToBoolean
                //Convert.ToInt16
                //Convert.ToInt64
                //Convert.ToIntDouble
            
                //var: a variable that auto detects what data type it is declared and initialized as.
            var any = "string" 
                // var cannot be declared in one line and initialized in another.

                //adding "const" before a variable makes it immutable
            const double lit = 420.69
                // const variable must also be initialized and declared in the same line

                //Arithmetic Operations:
                // +:Addition, -:Subtraction, *:Multiplication, /:Division, %:Modulus
                //NOTE: Division of integers will output integer quotient. if you want to change the answer to show decimals, declare the answer as a double
                //you can manage the hoe the expression is evaluated by grouping the expression, 1+3*5 in not equal to 1+(3*5)
                
        }
    }
}

