    #INTERMEDIATE PYTHON DOCUMENTARIES
    #RECIO, Angelo Rafael

    #DICTIONARIES
nums = {
    1: "one",
    2: "two",
    3: "three",
}
    #dictionary functions
    ## "in" and "not in" can be used to locate if a value is in a dictionary
#print(1 in nums) #prints True
#print("three" in nums) # prints False
#print(4 not in nums) # prints True

    ## get(): used to locate in dictionaries where pairs don't have indexes
print(nums.get(1)) #prints the value of the key"1"
print(nums.get(6,3)) #can take two keys and prints next key as INT if first key is not found
print(nums.get(8)) #prints "none" of no keys were found

    # none -used to represent an absence of a value (similar to null in other languages)
    # is converted to FALSE in a Boolean Value
#print(Boolean(None))
    # none object is returned by any funciton that doesn't explicitly return anything else

def some_func():
    #print ("HI") 
        #since no return statement was delcared a none object will print 
var = some_func() # if called to print, only returns the "return" value
#print(var) # prints all that can be printed even the lack of a return value 



    #FUNCTION: a code block that performs a job or returns a value
    #terms: parameters-variables of the function definition, arguments-values put into parameters
def add(a,b): #<- can have default values. Example: def add(a = 15,b = 4):
    c = a + b
    return c #return: returns a valuethat can be used later
    #function can have parameters/arguments if needed
    #function can be called + print in two ways:
def subtract(a,b):
    c = a - b
    return c
#print(subtract(10, 5))
    #OR
def multiply(a,b):
    c = a * b
    return c
display = multiply(10,5)
#print(display)
    #NOTE: variable insied functions cannot be called outside of the block

    # Functions can be objects
minus = subtract
#print(minus(10,5)) #prints 5

    #functions can be called as arguments in other functions, declare func object to call a function as an argument
def firstAdd (x,y):
    return x + y

def functionTwice(func,x,y):
    return func(func(x,y),func(x,y))
a=1
b=10
#print(functionTwice(add,a,b)) ##prints 22: func=add(), a=1, b=10



    #MODULES files or libraries to call when certain functions are needed
import random as rng ## "as" operator replaces name of module
#print(rng.__doc__)
from math import pi,sqrt ## we can take multiple functions from a module by adding commas in between
#print(pi)
#print(sqrt.__doc__)
    ##Standard Libraries of Python:
libraries = {
    "string":"",
    "re":"",
    "datetime":"",
    "random":"",
    "os":"",
    "multiprocessing":"",
    "subprocess":"",
    "socket":"",
    "email": "",
    "json":"",
    "doctest":"",
    "unittest":"",
    "pgb":"",
    "argparse":"",
    "sys":"",
    "and many more":""
}
    ## pip is used to install third-party libraries (bash command: pip install <library-name>)



    #FILE HANDLING:
    #open() - used to manipulate files
    #SYNTAX: variable = open("filepath/filename.type", "mode")
    #Alt Syntax: with open("filepath/filename.type", "mode") as f | f is the variable name
    # we can specify the mode used to open a file
        #WRITE
#f = open("Python/subfolder/filename.txt", "w") # W means write mode, for rewriting contents of a file, if file is not found, will make that file
#f.write("This has been added to the file.")
#f.close() #closing file after a write deletes all content from current file, making a new one according to the new write
        #READ
#f = open("Python/subfolder/filename.txt", "r") # r means read mode, for reading contents of a file, also the deafult mode
#print(f.read()) #print the read file, read()reads the file, you car read certain bytes of the file by giving numbers as arguments in the read()
#print(f.readlines()) #readlines() - return a list which each element is a line in the file
#for line in f: # use for loop to iterate through lines in the file
    #print(line)
#print("Done") # after reading all the contents of the file, it will return an empty string
#f.close()

#file.open("textfile.txt", "a") # W means append mode, for adding new contents of a file

#file.open("textfile.txt", "wb") # adding b opens ir in a binary mode, which is use for non-text file such as images and sound files
