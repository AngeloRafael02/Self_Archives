    #OBJECT ORIENTED PROGRAMMING PYTHON DOCUMENTARIES
    #RECIO, Angelo Rafael

    #classes: describes whatan object will be but is separate from the object itself, also called an instance?
    #   can be described as the object's blueprint, or description
class Cat:
    #Methods, function inside class, all methods have a "self" argument
    def __init__(self,color,legs): #__init__ method is the class constructor
        self.color = color
        self.legs = legs
felix = Cat("orange",4)
print(felix.color)