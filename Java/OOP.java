    // Java Class/OOP Notes
class OOP{
    static void firstMethod(String sentenceString){ //methods are functions that can be called to the entry point
            //A method is void when it does not return anything
        System.out.println(sentenceString);
    }
        public static void main(String[] args){ //<- this is the main entry point of the program
            firstMethod("This String Comes from a methods outside the main method");
            firstMethod("This String Comes from a methods outside the main method again"); // methods can be called as many as you want

        }
}