
//ArrayList - one o the many classes used to store and manipulate groups of objects
import java.util.ArrayList;

public class Arrays {
    public static void main(String[] args){
        //Array, a collection of variables of the same type

        //SYNTAX: Add "[]" to variable to ake it an array
        int[] firstArray = new int[5]; //we can define the capacity of the array, we can assign each index its own value
        firstArray[0] = 1; //index starts at 0
        firstArray[1] = 2;
        firstArray[2] = 3;
        firstArray[3] = 4;
        firstArray[4] = 5;
        //easier initialization of an Array
        String[] someNames = {"Angelo","Joy","Dan"}; //Arrays are grouped by curly brackets
        System.out.println(someNames[0]);
        System.out.println(someNames.length); //use "length" property to sum up the number of values in the array 

        //For Loop an Array
        int[] myArr = {1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1};
        int sum=0;
        for(int x=0; x<myArr.length; x++) {
            sum += myArr[x];
        }
        System.out.println(sum);
        //Better Code: Using a foreach loop
        int[] primes = {2, 3, 5, 7};
        for (int t: primes) {
            System.out.println(t); 
        }

        //Multi-Dimensional Arrays can be made by declaring the variable and it dimension by the number of brackets
        int[][] multiArray = { {1, 2, 3}, {4, 5, 6} }; //two brackets in the variable declares a two-dimensional Array
        System.out.println(multiArray[0][2]); 
        //Alternative initialization syntax
        int array[][] =  {{3, 5, 8}, {7, 54, 1, 12, 4}}; 
        System.out.println(array[0][2]);

        //Calling an ArrayList: 
            //put inside the "<>" what data type to store in the ArrayList,"any" type when not declared
            //put inside the "()" how many should be stored in the ArrayList, limitless when not declared
        ArrayList colors = new ArrayList<>();
        colors.add("Red"); //add() - method used to add into ArrayList
        colors.add(1);
        colors.add("Blue");
        colors.remove("Blue"); //remove() - method used to remove from ArrayList
        System.out.println(colors);
        System.out.println(colors.get(0)); // get() - method used to return a specific element via calling its index
        System.out.println(colors.contains("Red")); // contains() - used to prove if a specific input is in the element
        System.out.println(colors.size()); // size() - used to return the number of items in the array


    }
}
