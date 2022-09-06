    // Java Class/OOP Notes
    class Animal {
        void bark() {
            System.out.println("Woof-Woof");
        }
    }

class OOP{
    static void firstMethod(String sentenceString){ //methods are functions that can be called to the entry point
            //A method is void when it does not return anything
        System.out.println(sentenceString);
    }
    static int basicAdder(int a, int b){
        return a+b;
    }
        public static void main(String[] args){ //<- this is the main entry point of the program
            firstMethod("This String Comes from a methods outside the main method");
            firstMethod("This String Comes from a methods outside the main method again"); // methods can be called as many as you want
            System.out.println(basicAdder(12, 3));
            Animal dog = new Animal(); // Other classes can be used as ling as it is declared as its own variable.
            dog.bark();
        }
}