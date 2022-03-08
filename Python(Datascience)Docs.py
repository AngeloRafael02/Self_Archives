#Requirements: NumPy, Pandas

import numpy as np # provides array structure for performing operations with data, MORE coompact than lists
import pandas as pd #PanDa = Panel Data: for reading and extracting data from files, transform it, analyze it, and more.

#NUMPY

# Arrays: ofter called ndarrays meaning n-dimensional arrays
#NumPy arrays are HOMOGENOUS meaning they can only contain a single data type. 
x = np.array([1,2,3,4]) 
y = np.array([[1,2,3],[4,5,6],[7,8,9]])
#Array Properties:  y.ndim - return the number of dimension of the array
#                   y.size - returns the total number of elements of the array.
#                   y.shape - returns the tuples of integers that indicate the number of elements stored in each dimension of array
y1 = np.append(y,[10,11,12]) # .append - adds an element 
y2 = np.delete(y1,[9,10,11]) # .delete - delete an element via its indexes
y3 = np.sort(y2) # .sort - sort an array
# np.arrange() allows you to create an array that contains the range of evenly spaced intervals
z = np.arange(1,10,2) #syntax: from 1 to 10 in 2 step intervals
#prints [1 3 5 7 9]

a = np.arange(1,7) #this is a 1-dimensional array
a1 = a.reshape(3,2) # reshape() changes the shape of the array. SYNTAX: reshape(columns,rows)
# reshape can also do the opposite and take a dimension away from an array
a1 = a.reshape(6) 
a11 = a.flatten() # flatten() can do the sane as taking a dimension away from the array

#Indexing and Slicing
b = np.arange(1,10)
b1 = b[2:8] # start at index 2, end with number 8
b2 = b[5:] #start at index 5 onwards
b3 = b[:2] # every item to the left of number 2
b4 = b[-3:] # negative number means reverse the index, third last from the array
b5 = b[b>4] # all numbers below 4
# Operations
b6 = b.sum()    # calls the total of all numbers in the array
b7 = b.min()    # calls the smallest value in the array
b8 = b.max()    # calls the largest value in the array
b9 = b*2        # multiply all the items by the given number
b10 = np.mean(b)  # calls theaverage of all the number in the array, prints float since division occurs
b11 = np.median(b) # calls the median of all the array
b12 = np.var(b) # calls the variance of all the numbers in the array
b13 = np.std(b) # call the standard deviation of the numbers in the array

#PANDA

#two primary components are SERIES(essentially columns) and DATAFRAME(multi-dimensional tale made from a collection of SERIES)
data = { #looks like JSON
    'ages': [14, 18, 24, 42],
    'heights': [165, 180, 176, 184]
}
c = pd.DataFrame(data) #prints a table of the data + auto incrementing numbers for "index"
c1 = pd.DataFrame(data, index = ["James", "Bob", 'Amy', "Dave"]) # replace index with names
c2 = c1.loc["Bob"] # access a row using its index with OBJECT.loc["INDEX"]
#PRINT EXAMPLES HERE 
print(c2)