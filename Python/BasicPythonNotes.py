    # BASIC PYTHON NOTES
    # By: ANGELO RAFAEL RECIO

    # LIBRARIES
    #import math # module that provides mathematical function defined by the C standard

    #STRING: immutable
    # quote marks/apostrophes can be used with backslash at the start


words = "\"HeLlO WoRlD\"" 
    # strings can also be modified via available functions
lowercase = words.lower()
print(lowercase)
uppercase = words.upper()
print(uppercase)
titlecase = words.title()
print(titlecase)
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
    # strings can be also called on to other strings with "f" declared before the string
sentence = f"my first code is { words }"
    # strings next to each other will automatically CONCATENATE, we can also select which strings to concatenate
morningGreeting =  "Good" " Morning"
print(morningGreeting)

firstWord = "Hey,"
secondWord = " How Are you?"
secondSentence = firstWord + secondWord + "lol" #use + to concatenate strings

    #strings can also be considered as arrays of characters
strArr = "Python String"
ArrSplice = strArr[2] # prints T
    # len() function to get the length of the string
strlen = len(strArr) # prints 13
    #slicing is a function to get a substring of a string
strSlice = strArr[0:2] # prints "p" and "y"
#words.isalpha() #Return True if the string is an alphabetic string, False otherwise


    #String Formatting: alternative way of embedding strings and non-string
array = [4,5,6]
msg = "Numbers: {0} {1} {2}".format(array[0],array[1],array[2])
print(msg)
    #string formatting can also be done with named arguments
q  ="{x} {y}".format(y="there",x="Hello")
print(q)


    #String Functions
print(", ".join(['spam','eggs','ham']))#joins([]) joins a list of strings with another strings as a separator
print("spam, eggs, ham".split(", ")) #split() turns a string into a list with a certain separator
print('Hello World'.replace('World', 'Earth')) #replace() replaces one substring of a string with another
print('This is a Sentence'.startswith('This')) # startswith() determines the start of the string is a certain string
print('This is a Sentence'.endswith('Sentence')) #endswith() determines the end of the string is it is a certain string


    #INTEGER
integer = 420 
bigNumber = 10_000_000_000 #_underscored to understand large numbers
floatNumber = 619.00 #FLOAT: putting .0 at the end of the number
    #Operations: +-Addition --Subtraction *-multiplication //-division **-exponent %-modulus


    #Numeric Functions
print(min(1,2,3,4,0,2,1)) # min() finds the smallest number in an array
print(max([1,2,3,4,0,2,1])) # max([]) finds the largest number in an array
print(abs(-99)) # abs() finds the distance of a number from 0
print(sum([1,2,3,4,5])) #sum([]) adds all the number in a list


    #CONSTANTS: written in ALL_CAPITAL_LETTERS with underscores if separating the words
    # All-caps to be treated by Programmers as Constant
PI = 3.14
GRAVITY = 9.81

    #use type(object) to return the data type of a specific input/data. Outputs "<class 'data type'>"

    #BOOLEAN: represents TRUE or FALSE. Note that the results are boolean, not string, despite using letters
isThereString = bool('Hi') # prints TRUE
isThereString2 = bool('') # prints FALSE
isThereValue = bool(100) # prints TRUE
isThereValue2 = bool(0) # prints FALSE
isNumberCorrect = bool(80 > 10) # prints TRUE
isNumberCorrect2 = bool(80 < 10) # prints FALSE

    #DOCSTRINGS: Multi-line comments used for documentation of function and other parts of the code, must is put in the first part of a module, function or class
def add_numbers(num1,num2):
    """This
     Returns the Sum of num1 and num2.
    """
    num3 = num1 + num2
    return num3
print(add_numbers(60,9)) # Prints result from the given two parameters
print(add_numbers.__doc__) # Prints the DOCSTRING of the function
print(add_numbers.__code__) #prints the location (by line) of the function where the Docstring is located


    #INPUT
    #SYNTAX: input = input('Enter Value: ')
#print(input) #prints input function, receives an input and returns it back as output
"""
factor1 = input('Enter factor1: ')
factor2 = input('Enter factor2: ')
answer = int(factor1) * int(factor2)
print(f"the Product is {answer}")""" 


    #DATA TYPE CONVERSION
    #float(str) #turns string into a float number
    #bool(val)  #turns values to boolean value,  does it have value or not?
    # str(val)  #returns string of a value


    #LIST: "Arrays" that can have several different data types
    # make object "plural" when naming the variable
    # Use list when collection of  data doe snot need random access.
    # Use when you need a simple iterable collection that is modified frequently
list1 = [1,2,3,4,6] #1d list
list2 = [[0,0], [0,1], [1,1], [1,0]] #2d list
print(list2) #prints all in list
print(list1[2]) #prints specific value on list
print(list1[-1]) #prints specific item in reverse order

list1[4] = 5 #change a value from the list
list1.append(6) # append(item) adds a value on the list at the end of the list
list1.insert(2,2.5) #insert(order, item) inserts an item in a specific place of the list
del list1[2]   #del deletes item via its order
popLastValue = list1.pop() #pop() removes last element from a list and returns it as its own element/object
list1.remove(3) #remove() removes item by value


    #LIST COMPREHENSIONS are  a useful way to quickly create lists
    #NOTE: Creating a list in a very extensive range will result in Memory Error
cubes = [i**3 for i in range(5)] #lists the first 5 cubic numbers
print(cubes) # prints [0, 1, 8, 27, 64]
evens = [i**2 for i in range(10) if i**2 % 2 == 0]
print(evens) # prints [0, 4, 16, 36, 64]


    #LIST FUNCTIONS
nums = [55,44,33,22,11]
if all([i > 5 for i in nums]): # all() take a condition and determines it if it's true or false, if all conditions pass, returns true
    print("All Larger than 5")
if any([i % 2 == 0 for i in nums]): #any() take a condition and determines it if it's true or false, if one conditions pass, returns true
    print("At least on is even")
for v in enumerate(nums): # enumerate()
    print(v)


    #TUPLES: Lists that can't be mutated but can be reassigned a new variable, can be used in for loops
    #Use tuples when data should not be changes
    #tuples are faster than lists but cannot be changed
rgb = ("red", "green", "blue") #tuples can also not have parenthesis
emptyTPL = () #empty tuple created by empty parenthesis
print(rgb[0]) # access tuples with their index
    #rgb[3] = "white" <= however, item reassignment won't work, 'tuple' object does not support item assignment
rgb = ("orange", "yellow", "violet") #tuples can be reassign to a variable that holds a tuple
    # Tuple Unpacking : tuples can be unpacked
l,m,*n,o = [1,2,3,4,5,6,7,8,9] ##l=1,m=2,0=4,n=everything else


    ##SETS: Similar to list or dictionaries. created by curly braces and has no index, cannot contain duplicate elements
    # Use sets when you need uniqueness to the elements
intSet = {1,2,3,4,5}
print(3 in intSet) ## since sets don't have indexes, call them in their object name
print(intSet)

intSet.add(6) # add() to add items on set
print(intSet)

intSet.remove(1) # remove() ti remove items in a set
print(intSet)

set1 = {1,2,3,4,5,6}
set2 = {4,5,6,7,8,9}
    # Union (|): used to combine sets, duplicates are turn to one
print(set1 | set2) # prints {1, 2, 3, 4, 5, 6, 7, 8, 9}
    # Intersections (&): used to call elements that are the same in two sets
print(set1 & set2) # prints {4, 5, 6}
    # Difference (-): used to subtract the elements in the first set but nit in the second
print(set1 - set2) # prints {1, 2, 3}
print(set2 - set1) # prints {8, 9, 7}
    # Symmetric Difference (^): used to get items in either set but not both
print(set1 ^ set2) # prints {1, 2, 3, 7, 8, 9}


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
print(companies) #prints all the list of the list

    #Sorted() - function that returns the new sorted list from the original list. function doesn't modify the original list
guests = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer']
#NOTE: Sorted() Alters the last call of the of the list including latest sorted() functions
sort_guest = guests.sort()

    #list Slices: can be done in tuples too
sorted_guests2 = guests[1:4]  # <= shows list slice, first parameter = starting index, second parameter = ending index
#sorted_guests3 = guests[-3:]  # negative first index refers to the arrangement in reverse
#sorted_guests4 = guests[::3]  # third Parameter refers to intervals
#sorted_guests5 = guests[::-1]  # negative parameters return list, from last element to first element
#guests[0:2] = ["Felix", "Daniel"] # appends items in a list
#del guests[2:5] # Deletes items on a list


    #EXCEPTION_HANDLING
"""
Try:
    code for program
    if input == "certain wrong condition":
        raise (kind of Error) #Raise: exceptions, raised as arguments that would give detail about them
    false statement
        assert (is this code returning a false) #assert used to check if a line of code os not working/is not true/does not make sense
except: #except with without ant exception will cath all errors
    print("An error occurred")
    raise (kind of Error) # raise statement in except block re-raises what ever exception ocurred
    code if error 1 occurs
except errorReason:
    code for error 2 occurs
except Exception as error: #good practice to catch other general errors
    print(error)
else:   #you can use else in exception handling. in this case it will only execute whe there are no errors found
    print("something else)
finally: #executes after the try clause and any except clause
    print('Executes no matte what')
"""


def func(x):  #assert example,
    assert x > 0, "error!"
    print(x)
#func(0) #goes to error
#func(1) #lets print(x)
    #COMMON EXCEPTIONS:
        # ImportError - an import fails
        # IndexError - a list is indexed with an out-of-index number
        # NameError - an unknown variable is used
        # SyntaxError - the code can't be Parsed Properly
        # TypeError - function is called on a value of an inappropriate type
        # Value - function is called on a value with appropriate type but with an inappropriate value 
    #There are more builtin errors as well as in third-party libraries

    #Dictionary: collection of key:value pairs where each key is diagnosed with a value    JSON??
    #            the value can be a number, string, tuple or even another dictionary as long as its immutable
    # Used when you need logical association between a key:value pair, when you need fast lookup far data based on custom key
    # Used when data is constantly modified, DICTIONARIES ARE MUTABLE
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
print(me["name"]) # square bracket notation, if key doesn't exist returns KeyError
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
    return c #return: returns a value that can be used later
    #function can have parameters/arguments if needed
    #function can be called + print in two ways:
def subtract(a,b):
    c = a - b
    return c
print(subtract(10, 5)) #prints 5
    #OR
def multiply(a,b):
    c = a * b
    return c
display = multiply(10,5)
print(display) #prints 50
    #NOTE: variable inside functions cannot be called outside of the block


    ## Functions can be objects
minus = subtract
print(minus(20,5)) #prints 15

    ###TO BE CONTINUED IN intermediatePythonDocumentation.py