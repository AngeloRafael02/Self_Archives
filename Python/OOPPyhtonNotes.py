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
B().spam() #calling a "super" method from a Child class to the Parent Class

    

    