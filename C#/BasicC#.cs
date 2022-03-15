// See https://aka.ms/new-console-template for more information
// C# Documentation
// By: RECIO, Angelo Rafael

//NOTE: Study dotnet commands in cmd

namespace Basics{
    class Variables{
        static void Main(string[] args){
            int myAge = 20;
            double pi = 3.14;
            char gura = 'a'; //char requires single quotes
            string name = "Angelo"; //strings require double quotes
            bool isDed = false;
            Console.WriteLine(myAge + pi + gura); //Console.WriteLine() - used for printing out outputs into the terminal
            Console.WriteLine(name + " is " + isDed + " happy.");
                //placeholders can be used in printing output, similar to string literals
            Console.WriteLine(" myAge = {0}, pi = {1}", myAge, pi); //don't forget to reference the variable/s used
                //you can put as much placeholders as you need ({3},{4},...)
        }
    }
}

