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

    }
}
