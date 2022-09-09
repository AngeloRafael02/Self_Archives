    // Java Class/OOP Notes
    class Animal {
        String color; //<- these are Attributes, Basically variables declared ina class, public in default
        String name; // Their value can be declared one an object is created, but it's value is null before that
        int Age;
        private String nickName = "Dick"; //private  is an access modifiers that means that mean that it cannot be used itself outside the class, unless allowed to by means

        void bark() {
            System.out.println("Woof-Woof");
            System.out.println(nickName);
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
            dog.name = "Pulong";
            System.out.println(dog.name + " is the Name of my Dog");
        }
}