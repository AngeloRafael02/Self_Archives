#Requirements: NumPy

import numpy as np

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


print(z) 