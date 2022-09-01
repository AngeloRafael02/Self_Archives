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

        //String Concatenation
        String firstName ="Angelo Rafael ";
        String lastName = "Recio";
        System.out.println(firstName + lastName);



        //CONDITIONALS AND LOOPS

        //If-Else: can be Nested
        if (firstName == "Angelo Rafael ") {
            System.out.println("nice");
        }else if(firstName == "Something Else"){
            System.out.println("still nice");
        } else {
            System.out.println("Not Nice");
        }

        //Switch: can be used in multiple numerical value returns
        int z = 90;
        switch(z){
            case 89:
                System.out.println("A");
                break;
            case 90:
                System.out.println("B");
                break;
            case 91:
                System.out.println("C");
                break;
            default:
                System.out.println("Null");
        }
        //ALTERNATE SWITCH SYNTAX: (Switch Expression)
        int day = 2;
        String dayType = switch (day) {
            case 1,2,3,4,5 -> "Working Day";
            case 6,7 -> "Weekend";
            default -> "invalid";
            };
        System.out.println(dayType);

        //While Loop
        int a = 5;
        while (a != 0) {
            System.out.println("Hello");
            if(a == 3){
                break; //BREAK is used to abruptly end a loop because of a given condition
            }
            a--;
        }
        //For Loop
        //Syntax: (initial value, condition, increment/decrement statement)
        for(int b = 2; b <= 10; b += b){
            if(b == 4){
                continue; // CONTINUE is Used to skip a certain condition in a loop
            }
            System.out.println(b);
        }
        //Do-While Loop: Runs the code once before testing condition for iteration
        int c  = 1;
        do{
            System.out.println(c);
            c++;
        }while(c < 5);
    }
}