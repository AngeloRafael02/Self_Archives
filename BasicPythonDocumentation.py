# BASIC PYTHON DOCUMENTATION
# By: ANGELO RAFAEL RECIO

# LIBRARIES
#import math # module that provides mathematical function defined by the C standard

#STRING: immutable
# quote marks/apostrophes can be used  with backslash at the start

from curses.ascii import isalpha


words = "\"HeLlO WoRlD\"" 
# strings can also be modified via  available functions
lowercase = words.lower()
uppercase = words.upper()
titlecase = words.title()
# "\" for file pathings or other, can only be used when "r" is declared before the string
filePath = r"C:\Users\user\Documents\UB_Files\Yr2Sem2\Python(OOP)\Documentation.py"
# Use triple quotes to span multiple lines, can be double or single quote
postgresNewTable = """
CREATE TABLE characters (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    contactNumber INTEGER NOT NULL,
    email VARCHAR(50) 
);
"""
# strings can be also called on to other strings with "f" decalred before the string
sentence = f"my first code is { words }"
# strings next to each other will automatically CONCATENATE, we can also select which strings to concatenate
morningGreeting =  "Good" " Monring"
firstWord = "Hey,"
secondWord = " How Are you?"
secondSentence = firstWord + secondWord + "lol" #use + to concatenate strings
#strings can also be considred as arrays of characters
strArr = "Python String"
ArrSplice = strArr[2] # prints T
# len() function to get the length of the string
strlen = len(strArr) # prints 13
#slicing is a function to get a substring of a string
strSlice = strArr[0:2] # prints "p" and "y"
#words.isalpha() #Return True if the string is an alphabetic string, False otherwise

#INTEGER
integer = 420 
bigNumber = 10_000_000_000 #_underscored to understand large numbers
floatNumber = 619.00 #FLOAT: putting .0 at the end of the number
#Operations: +-Addition --Subtraction *-multiplication //-division **-exponent %-modulus

#CONSTANTS: written in ALL_CAPITAL_LETTERS with undersores if separating the words
# All-caps to be treated by Programmers as Constant
PI = 3.14
GRAVITY = 9.81

#use type(object) to return the data type of a specific input/data. Outputs "<class 'data type'>"

#BOOLEAN: represents TRUE or FALSE. Note that the results are boolean, not string, despite using letters
isthereString = bool('Hi') # prints TRUE
isthereString2 = bool('') # prints FALSE
isthereValue = bool(100) # prints TRUE
isthereValue2 = bool(0) # prints FALSE
isNumberCorrect = bool(80 > 10) # prints TRUE
isNumberCorrect2 = bool(80 < 10) # prints FALSE

#DOCSTRINGS: Multi-line comments used for documentation of function and other parts of the code, must is put in the first part of a module, function or class
def add_numbers(num1,num2):
    """This
     Returns the Sum of num1 and num2.
    """
    num3 = num1 + num2
    return num3
#print(add_numbers(60,9)) # Prints result from the given two parameters
#print(add_numbers.__doc__) # Prints the DOCSTRING of the function
#print(add_numbers.__code__) #prints the location (by line) of the function where the Docstring is located
#print(math.sqrt.__doc__) # prints the the doc of squareroot function of the library

#INPUT
#input = input('Enter Value: ')
#print(input) #prints input function, receives an input and returns it back as output
"""
factor1 = input('Enter factor1: ')
factor2 = input('Enter facter2: ')
answer = int(factor1) * int(factor2)
print(f"the Product is {answer}")""" 

#DATA TYPE CONVERSION
#float(str) #turns string into a float number
#bool(val)  #turns values to boolean value,  does it have value or not?
# str(val)  #returns string of a value

#LIST: Arrays
list1 = [1,2,3,4,6] #1d list
list2 = [[0,0], [0,1], [1,1], [1,0]] #2d list
#print(list2) #prints all in list
#print(list1[2]) #prints specific value on list
#print(list1[-1]) #prints specific item in reverse order
list1[4] = 5 #change a value from the list
list1.append(6) # append(item) adds a value on the list
list1.insert(2,2.5) #insert(order, item) inserts an item ina specific place of the list
del list1[2]   #del deletes item via its order
popLastValue = list1.pop() #pop() removes last element from a list and returns it as its own element/object
list1.remove(3) #remove() removes item by value

#TUPLES: Lists that can't be mutated but can be reassigned a new variable, can be used in for loops
rgb = ("red", "green", "blue")
#rgb[3] = "white" <= won't work, 'tuple' object does not support item assignment
rgb = ("orange", "yellow", "violet") #tuples can be reassign to a variable that holds a tuple

#sort() - used on list to sort alphabetically
names = ["james", "mary", "charles", "urban"]
names.sort() #print(names after this line will print all the items of the list alphabetically
names.sort(reverse = True) #print(names after this line will print all the items of the list alphabetically in reverse
#Other Notes: in default they will arrange strings alphabetically and integers from smallest to largest

companies = [
    ['Google', 2019, 134.81],
    ['Apple', 2019, 260.1],
    ['Facebook', 2019, 70.7]
]
def sort_key(companies):
    return companies[0] #define a sort key

companies.sort(key = sort_key, reverse = True)
#print(companies) #prints all the list of the list

#Sorted() - function that returns the new sorted list from the original list. function doesn't modify the original list
guests = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer']
#NOTE: Sorted() Alters the last call of the of the list including latest sorted() functions
#sort_guest = guests.sort()
#sorted_guests2 = guests[1:4]  # <= shows list slice, first parameter = starting index, second paramemeter = ending index
#sorted_guests3 = guests[-3:]  # negative first index refers to the arrangement in reverse
#sorted_guests4 = guests[::3]  # third Parameter refers to intervals
#sorted_guests5 = guests[::-1]  # negative parameters return list, from last element to first elemant
#guests[0:2] = ["Felix", "Daniel"] # appends items in a list
#del guests[2:5] # Deletes items on a list


#EXCEPTION_HANDLING
"""
Try:
    code for program
except errorReason1:
    code if error 1 occurs
except errorReason:
    code for error 2 occurs
except Exception as error: #good practice to catch other general errors
    print(error)
finally: #executes after the try clause and any except clause
    print('Finishing up')
"""

#Dictionary: collection of key:value pairs where each key is diagnosed with a value    JSON??
#            the value can be a number, string, tuple or even another dictionary as long as its immutable
me = {
    'name': 'Angelo Rafael Recio', 
    'age': 20,
    'single': True,
    'favorite_colors': ['black', 'white', 'blue'],
    'media_favs' : {
        "anime": "Jojo's Bizarre Adventures",
        "film": "Vampire hunter D: Bloodlust",
        "documentary": "WWI in Color"
    } 
}
#ways to access values on a dictionary:
# print(me["name"]) # square bracket notation, if key doesn't exist returns KeyError
printAge = me.get("age") # Get() method, if key doesn't exist returns None
#adding new key pairs to dictionary:
me['gender'] = 'Male' #just declare another key and value
#modifying an existing key pair value:
me['single'] = False #just declare a new value
#removing key pair values:
del me["single"]
# items(): returns an object which contains a list of of key value pairs as tuples
#                               v-list inside tuple inside list       
# print(me.items()) #dict_items([("key1":value1),(key2:value2),...])
# keys(): returns all the keys in a tuple in a list
# values(): returns all values in a dictionary
for key in me.keys():
    print(key)


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

## Functions can be objects
minus = subtract
#print(minus(10,5)) #prints 5

###TO BE CONTINUED IN intermediatePythonDocumentation.py