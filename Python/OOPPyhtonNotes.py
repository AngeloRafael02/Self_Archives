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
    #Magic Method Examples using comparison operators
        # __lt__ for <
        # __le__ for <=
        # __eq__ for ==
        # __ne__ for != if __ne__ is not implemented, it returns as the opposite of __eq__
        # __gt__ for >
        # __ge__ for >=
class SpecialString1: #to be investigated
    def __init__(self,cont):
        self.cont = cont
    def __gt__(self, other):
        for index in range(len(other.cont)+1):
            result = other.cont[:index] + ">" + self.cont
            result += ">" + other.cont[index:]
            print(result)
spam = SpecialString1("spam")
eggs = SpecialString1("eggs")
spam > eggs    
    #Magic Methods for making classes as containers:
        # __len__ for len()
        # __getitem__ for indexing
        # __setitem__ for assigning to indexed values
        # __delitem__ for for deleting indexed values
        # __iter__ for iteration over objects such as loops
        # __contains__ for in
import random as rng

from click import password_option
class VagueList:        #To be studied
    def __init__(self,cont):
        self.cont=cont
    def __getitem__(self,index):
        return self.cont[index + rng.randint(-1,1)]
    def __len__(self):
        return rng.randint(0,len(self.cont)*2)
vague_list = VagueList(["A","B","C","D","E"])
#print(len(vague_list))
#print(len(vague_list))
#print(vague_list[2])
#print(vague_list[2])
    #Other Magic Methods
        # __call__ for calling objects a functions
        # __int__ and __str__ for converting objects to built-in datatypes


    #ENCAPSULATION - involves packaging or related variables and function into an easy to use object
    #data hiding - implementation of detail of class should be hidden, we can use weakly private methods
    #weakly private methods: have a single undersore in the beginning, this signals that they are private and shouldn't be used in an external code (mostly a convention, does not stop external code from accessing them).
class Queue:
    def __init__(self, contents):
        self._hiddenlist = list(contents)
    def push(self, value):
        self._hiddenlist.insert(0, value)
    def pop(self):
        return self._hiddenlist.pop(-1)
    def __repr__(self): # __repr__ : magic methos used for string representation of the instance
        return "Queue({})".format(self._hiddenlist)
queue = Queue([1, 2, 3])
print(queue) #Queue([1, 2, 3])
queue.push(0)
print(queue) #Queue([0,1, 2, 3])
queue.pop()
print(queue) #Queue([0,1, 2])
print(queue._hiddenlist) # [0, 1, 2]
    # strongly private methods: have double underscores at the beginning of their names
class Spam:
    __egg = 7
    def print_egg(self):
        print(self.__egg)
s = Spam()
s.print_egg() # 7

    #CLASS METHODS: called by class which is passed to the cls parameter of the method
    # Syntax: @classmethod <linebreak> def functionname(cls,arguments):
    # - Marked with class method decorator (@classmethod)
class Rectangle:
    def __init__(self,width,height): #3. changed argument initialized
        self.width = width
        self.height = height
    def calculate_area(self):   #4. initialized arguments calculated
        return self.width * self.height
    @classmethod
    def new_square(cls, side_length): #2. argument is changed to fit 
        return cls(side_length, side_length)
square = Rectangle.new_square(5) #1. declares with a single argument, unction is called by class
print(square.calculate_area())

    #STATIC METHODS: does not have access to class level attributes, therefore it cannot modify the class state
    # bound to class and nor the object of the class
    # Syntax: @classmethod <linebreak> def functionname(cls,arguments):
    # - Marked with class method decorator (@classmethod)
from datetime import date
class Student:
    def __init__(self,name,age):
        self.name = name
        self.age = age
    @classmethod
    def fromBirthYear(cls,name,year):
        return cls(name,date.today().year - year)
    @staticmethod #doesn't interact with the class states, used for utility cases
    def is_adult(age):
        return age>18
#Object is made and initialized
person1 = Student('James',21)
print(person1.age) #prints 21
#Object is used in a class method function4
person2 = Student.fromBirthYear('James',1996)
print(person2.age) #prints 26(as of 2022)
#Not an object but is called to now if its an adult.
print(Student.is_adult(22)) #prints True

    #PROPERTIES: provides a way in customizing access to instace attributes
    #helps to access teh class methods as attributes (not need to use parenthesis ex. )
class Pizza:
    def __init__(self,toppings,number):
        self.toppings = toppings
        self.number = number
    @property
    def pineapple_allowed(self):
        if self.number>18:
            return True
        else:
            return False
pizza = Pizza(["cheese","tomato"],12)
print(pizza.pineapple_allowed) # does not need parethesis like "pizza.pineapple_allowed()", takes the argument from the object itself
    # Properties can also be set by setter/getter functions
class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings
        self._pineapple_allowed = False
    @property
    def pineapple_allowed(self):
        return self._pineapple_allowed
    @pineapple_allowed.setter
    def pineapple_allowed(self, value):
        if value:
            password = input("Enter the password: ")
            if password == "Sw0rdf1sh!":
                self._pineapple_allowed = value
            else:
                raise ValueError("Alert! Intruder!")
pizza = Pizza(["cheese", "tomato"])
print(pizza.pineapple_allowed)
pizza.pineapple_allowed = True
print(pizza.pineapple_allowed) #To be investigatedd