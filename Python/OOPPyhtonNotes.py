    #OBJECT ORIENTED PROGRAMMING PYTHON DOCUMENTARIES
    #RECIO, Angelo Rafael


    #   CLASS: describes whatan object will be but is separate from the object itself, also called an instance?
    #   can be described as the object's blueprint, or description
class Cat:
    #Methods, function inside class, all methods have a "self" argument
    def __init__(self,color,legs): #__init__ method is the class constructor
        self.color = color
        self.legs = legs
felix = Cat("orange",4)
#print(felix.color) #prints "orange"


    # INHERITANCE: provides a way to share functionality between classes
class Animal:
    def __init__(self,name,color): #Superclass: Class the is inherited from
        self.name = name
        self.color = color
class Bird(Animal):
    def BirdSound(self):
        print("Tweet!")
class Dog(Animal): #Subclass: Class that Inherits from another Class
    def DogSound(self):
        print("Bark!")
pulong = Dog("pulong", "Brown") #uses "Dog" class, that's functionality is inherited from "Animal" Class
#print(pulong.color) #prints "brown"
#pulong.DogSound()   # Calls the Dogsound() from "Dog" class
    # super: keyword for find a method with a certain name from the object's Parent/MasterClass
class A:
    def spam(self):
        print(1)
class B(A):
    def eggs(self):
        print(2) #is ignored because the "super" is called 
        super.spam()
#B().spam() #calling a "super" method from a Child class to the Parent Class


    #MAGIC METHODS: methods with double underscores at the beginning and end of their names.
    # examples: Operator Overloading
        # __add__ - method allows for the definition of a custom behavior for hte + operator in our class
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)
first = Vector2D(5, 7)
second = Vector2D(3, 9)
result = first + second # result  = (x=(5+3) + y=(7+9))
print(result.x) #prints 8
print(result.y) #prints 16
    #Other Examples
        # __sub__ for -
        # __mul__ for *
        # __truediv__ for /
        # __floordiv__ for //
        # __mod__ for %
        # __pow__ for **
        # __and__ for &
        # __or__ for |
        # __xor__ for ^
class SpecialString:
    def __init__(self,cont):
        self.cont = cont
    def __truediv__(self, other):
        line =  "=" * len(other.cont)
        return "\n".join([self.cont, line, other.cont])

    