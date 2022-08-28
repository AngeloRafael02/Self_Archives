//** Basics.java is a file made to produce example of Basic Java Codes as well as their functions in the file.*/

import java.util.Scanner;

public class Basics{
    public static void main(String[] args){
        String name = "Angelo"; // String is for words and Sentences
        System.out.println(name);

        int number = 69;
        System.out.println(number);

        double score = 4.2;
        System.out.println(score);
        
        /*int stands for integer and is mostly used for whole numbers,
         double is for number with decimals are huge number from what i can remember 
            //Single-line comments can be nested in a multi-line Comment but not another multi-line
         */

        char letter = 'Z';
        System.out.println(letter);

        Scanner myVar = new Scanner(System.in);
        System.out.println(myVar.nextLine());
        myVar.close();

        //Basic Arithmetic operations (except Modulo(%))
        int x = 6 + 3 - 1 * 3 / 6;
        System.out.println(x);

        //Increment & Decrement Operations
        //Prefix: Increments/Decrements first the uses that value in a expression
        ++x;
        --x;
        //Postfix: Uses the Variable first then Increments/Decrements
        x++;
        x--;

        //Assignment Operations
        int y = 6;
        y+=x;
        System.out.println(y);
    }
}