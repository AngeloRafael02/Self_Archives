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

        //SETTER & GETTER - used to effectively protect data when creating classes, used in ENCAPSULATIONS
        private String Word;
        public void setWord(String input){ //setter - starts with 'set', takes a parameter and assigns it to the attribute.
                this.Word = input;
        }
        public String getWord(){ //getter = starts with 'get', returns the value of the attribute.
            return Word;
        }

        //CONSTRUCTORS used to provide initial values for object attributes. Has no return Type. must be the same name as the class
            //NOTES: a class can have many constructors with different parameters, just use setter methods inside the constructors to set attributes
        public String ScientificName;
        public int numberOfLegs;
        Animal(String Species, int legs) {
            ScientificName = Species;
            numberOfLegs = legs;
            this.setWord(Species); // a setter may be used to set new attribute values
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
            
            //creating a new object using a constructor
            Animal dinosaur = new Animal("Nigersaurus",4); // Other classes can be used as ling as it is declared as its own variable.
            dinosaur.bark();
            dinosaur.name = "Pulong";
            System.out.println(dinosaur.name + " is the Name of my Dog");

            dinosaur.setWord("Hello");
            System.out.println(dinosaur.getWord());

            //creating a new object using a constructor
            Animal pig = new Animal("Sus", 4);
            System.out.println(pig.ScientificName);

            //MATH Class
            int num1 = Math.abs(-10); //abs() methods returns the absolute value of the argument
            System.out.println(num1);
            double bigNumber = 7.342;
            System.out.println(Math.ceil(bigNumber)); //ceil() method returns the arguments as rounded up
            System.out.println(Math.floor(bigNumber));//floor() method returns the arguments as rounded down
            System.out.println(Math.max(10,20)); //max() returns the bigger value
            System.out.println(Math.min(10,20)); //min() returns the smaller value
            System.out.println(Math.pow(10,20)); //pow() returns the power of a the number. Argument(base, exponent)

        }
}