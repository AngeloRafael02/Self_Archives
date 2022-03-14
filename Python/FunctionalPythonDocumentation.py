    # FUNCTIONAL PYTHON DOCUMENTATION
    # By: ANGELO RAFAEL RECIO

    # This is a style of programming based on functions
    #EXAMPLE:



from unittest import result


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
print(result)
    #Lambda Syntax:
print(list(map(lambda x: x+5,nums)))

    #filter(function,lambda) filters an iterable by leaving only the items that match the condition
nums = [11,22,33,44,55]
res = list(filter(lambda x: x%2==0,nums))
print(res)