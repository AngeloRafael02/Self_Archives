// See https://aka.ms/new-console-template for more information
// C# Documentation
// By: RECIO, Angelo Rafael

//NOTE: Study dotnet commands in cmd
//TEst other C# stuff with https://try.dot.net/

namespace Angelo{
    class Basics{
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
            //string temp;
            //Console.WriteLine("Type String:");
            //temp = Console.ReadLine(); //takes inputs 
            //Console.WriteLine(temp);            
            
            //Console.WriteLine("Type Integer");
            //int Age = Convert.ToInt32(Console.ReadLine()); //way to take intergers
            //Console.Write("He is {0} years old.", Age);
                //Other Convert.To___ functions:
                //Convert.ToBoolean
                //Convert.ToInt16
                //Convert.ToInt64
                //Convert.ToIntDouble
            
                //var: a variable that auto detects what data type it is declared and initialized as.
            var any = 69 ;
                // var cannot be declared in one line and initialized in another.

                //adding "const" before a variable makes it immutable
            const string lit = "HAHA XD";
            Console.Write(lit);
                // const variable must also be initialized and declared in the same line

                //ARITHMETIC OPERATORS:
                // +:Addition, -:Subtraction, *:Multiplication, /:Division, %:Modulus
                //NOTE: Division of integers will output integer quotient. if you want to change the answer to show decimals, declare the answer as a double
                //you can manage the hoe the expression is evaluated by grouping the expression, 1+3*5 in not equal to 1+(3*5)
            
                //ASSIGNEMT OPERATORS
            any += 2;
                //Examples:
                    //x += 1 (x = x + 1)
                    //x -= 1 (x = x - 1)
                    //x *= 1 (x = x * 1)
                    //x /= 1 (x = x / 1)
                    //x %= 1 (x = x % 1)
                    //x &= 1 (x = x & 1)
                    //x |= 1 (x = x | 1)
                    //x ^= 1 (x = x ^ 1)
                    //x >>= 1 (x = x >> 1)
                    //x <<= 1 (x = x << 1)

                //Increment Operator: used to decrease or increase a value by 1
            any++; //prefix - increments/decrements value, value isn't change
            ++any; //postfix - increments/decrements value first before using it

                //If-Else Statement: can be nested
            if (any < 8){
                Console.WriteLine("\n<8");
            } else if (any == 8){
                Console.WriteLine("\n=8");
            } else { //any > 8  
                Console.WriteLine("\n>8");
            }
                // RELATIONAL OPERATORS
                    //> - Greater than
                    //< - Less than
                    //>= - Greater than or equal
                    //<= - Less than or equal
                    //== equal to
                    //!= not equal to
                
                // LOGICAL OPERATORS
                    // ! - logical negation (Console.WriteLine(!True) //prints False)
                    // & - logical AND (bool a = true & true; Console.WriteLine(a) //prints True)
                    // | - logical OR (bool a = false | true; Console.WriteLine(a); //prints True)
                    // ^ - logical exclusive OR (Console.WriteLine(true ^ true); // output: False)
                        //CONDITIONAL LOGICAL OPERATORS: used in condition of statements like "If-Else"
                    // && - conditional logical AND
                    // || = Conditional Logical OR

                //SWITCH: Provides a more elegant way to test a variable for equality against a list of Values
            char vowel = 'a';
            switch(vowel){
                case char n when (n == 'a' || n == 'e' || n == 'i' || n == 'o' || n == 'u'): //a way in taking multiple consition in one case
                    Console.WriteLine("Vowel");
                    break; //break - used to end a case statement
                default: //the "else{}" statement f the switch
                    Console.WriteLine("Consonant");
                    break;
            }

                //WHILE Loop - Executes its block of code as longas is condition is True
            int num = 1;
            while(num < 3){
                //Console.WriteLine(num);
                num++;
            }   
                //another possible syntax
            int num1 = 1;
            while(++num1 < 6)
            //Console.WriteLine(num1);

                //FOR Loop: for (init;condition;increment/compound operators){statement/s}
            for(int x = 1; x < 5; x++){
                //Console.WriteLine("Value of x: {0}",x);
            }   
                //init and increment can be left out but the semicolons are mandatory
            int k = 2;
            for(; k <10;){
                Console.WriteLine(k);
                k+=2;
            }
        }
    }
}

