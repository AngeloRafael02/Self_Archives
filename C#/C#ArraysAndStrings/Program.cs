    // See https://aka.ms/new-console-template for more information
    // C# ARRAYS Notes
    // By: RECIO, Angelo Rafael

namespace Angelo{
    class Arrays{
        static void Main(string[] args){
                //ARRAY: it is a type of data structure that is used to store a collection of data
            int[ ] firstArray = new int[5]; //instantiates an array that hold 5 integers
                //you can assign values after instantiation
            firstArray[0] = 69;
                //we can also provide initial values top the array when declared
            string[ ] listOfStrings = new string[3]{"foo","bar","baz"}; //or o,it the size declaration when number  of elements is provided in the curly braces
               //SHORTER SYNTAX 
            double[] doubleArray = {3.6,6.9,4.2};

                //ARRAY & LOOPS
                //FOR Loop
            int[ ] a = new int[3];
            for (int i = 0; i < 3; i++){
                a[i] = i*2;
            }
            for (int i = 0; i < 3; i++){
                Console.WriteLine(a[i]);
            }

                //FOREACH LOOP
            int[ ] b = new int[3];
            for (int i = 0; i < 3; i++){
                b[i] = i*2;
            }
            foreach (int i in b){
                Console.WriteLine(i);
            }
        }
    }
}