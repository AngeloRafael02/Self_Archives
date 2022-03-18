    # FUNCTIONAL PYTHON DOCUMENTATION
    # By: ANGELO RAFAEL RECIO

    # This is a style of programming based on functions
    #EXAMPLE:

from doctest import Example


def apply_twice(func, arg):
    return func(func(arg))
def add_five(x):
    return x + 5
#print(apply_twice(add_five,10)) #prints 20
    
    #functional programming seeks to use Pure Functions
    #Pure Functions: has no side effects and only returns a value that depends ONLY on arguments, uses the RETURN keyword for output
        #Advantage if Pure functions: easier to reason about & test, more efficient
        #Disadvantage of Pure Function: Harder to write
    #Impure Functions: has side-effect, changes the state of variables

    #LAMBDAS: allows creation of functions on the fly. functions made by lambdas are anonymous.
    #named function below:
def polynomial(x):
    return x**2 + 5*x + 4
#print(polynomial(-4))
    #Lambda: only one line of code but can only do things that require a SINGLE expression
#print((lambda x: x**2 + 5*x + 4)(-4))

    #map(function/lambda,argument): takes a function and an iterable as arguments.
    #named funciton:
def add_five(x):
    return x + 5
nums = [15,25,35,45,55]
result = list(map(add_five,nums))
#print(result)
    #Lambda Syntax:
#print(list(map(lambda x: x+5,nums)))

    #filter(function,lambda) filters an iterable by leaving only the items that match the condition
nums = [11,22,33,44,55]
res = list(filter(lambda x: x%2==0,nums))
#print(res)

    #GENERATORS: type of iterable, like lists or tuples. Doesn't allow indexing but can be iterated by for loops. defined by the "yield" statement
def countdown():
    i=5
    while i > 0:
        yield i #yield is used to replace the return of a function to provide a result to its caller wotout destroying local variables
                # because they yield one item at a time, they don't have memory restrictions, meaning they can be infinite
        i -= 1
for i in countdown():
    print(i)
    # finite generators can be converted into lists by passing them as arguments in list() function
def numbers(x):
    for i in range(x):
        if i % 2 ==0:
            yield i
print(list(numbers(11)))

    #DECORATORS: provide a way to modify functions using other functions  
def decor(func):
    def wrap():
        print("=========")
        func()
        print("=========")
    return wrap
def print_words():
    print("Hello")
    #conventional way off calling an object funciton
decorated = decor(print_words) #declaring a function with an argument as an object
decorated() #call the object
    #wrapping a function with a decorator vie the @ and the decorator's name
@decor
def print_words2():
    print("Hi")
print_words2() 

    #RECURSION: when a returnstatement calls another function using its previously solved argument
    #Example1
def factorial(x): #(1) let say x = 5
    if x == 1:
        return 1
    else: #(2)meets this category
        return x*factorial(x-1) #(3) return 5 * (factorial(5-1)), repeating the function again because you called the function again
    #Example2
def is_even(y):
    if y == 0:
        return True
    else: 
        return is_odd(y-1) #referred to a new function and changes the value
def is_odd(y):
    return not is_even(y) #returns FALSE

    #*args : allowsfunctions to take varying numbers of arguments
def lists(named_arg, *args):
    print(named_arg)
    print(args)
lists(1,2,3,4,5)