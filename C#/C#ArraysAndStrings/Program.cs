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


                //MULTIDIMENSIONAL ARRAYS
                // the number of commans in between the brackets indicate the dimension of the array
            int[ , ] someNums = { {2, 3}, {5, 6}, {4, 6} }; 
            for (int k = 0; k < 3; k++) {
                for (int j = 0; j < 2; j++) {
                    Console.Write(someNums[k, j]+" ");
                }
                Console.WriteLine();
            }

                //JAGGED ARRAYS: arrays with element as arrays
            int[][] jaggedArr = new int[][]{
                new int[] {1,8,2,7,9},
                new int[] {2,4,6},
                new int[] {33,42}
            };
            int x = jaggedArr[2][1]; //index 2 - list, index 1 item on the list
            Console.WriteLine(x);
            

                //Arrays Properties - used to work in arrays
            int[ ] arr1 = {2,4,7};
            Console.WriteLine(arr1.Length); //returns thenumber of values.  can be used in for loops to know how many time to iterate
            Console.WriteLine(arr1.Rank); //returns the number of dimensions of the array
            Console.WriteLine(arr1.Max()); //max() returns the biggest value in the array
            Console.WriteLine(arr1.Min()); //min() returns the lowest value in the array
            Console.WriteLine(arr1.Sum()); //sum() returns the sum of all values in an array

                //STRING PROPERTIES
            string example = "some text";
            Console.WriteLine(example);
            Console.WriteLine(example[3]); // Strings are also arrays, each characters has it own index
            Console.WriteLine(example.Length); // return the total number of characters
            Console.WriteLine(example.IndexOf('t')); // returns the idex of a given character
            example = example.Insert(0, "This is "); //inserts a new character/string at a given index
            Console.WriteLine(example);
            example = example.Replace("This is ", "I am "); //replace a substring the matches the given with a new string
            Console.WriteLine(example);
            if (example.Contains("some")){ //returns true if string has a certain characters/sunstring
                Console.WriteLine("found 'some'");
            }
            example = example.Remove(4); //
            Console.WriteLine(example);
            example = example.Substring(2);
            Console.WriteLine(example);

        }
    }
}