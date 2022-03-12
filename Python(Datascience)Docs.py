#Requirements: NumPy, Pandas, MAtplotlib, and conda environment

import numpy as np # provides array structure for performing operations with data, MORE coompact than lists
import pandas as pd #PanDa = Panel Data: for reading and extracting data from files, transform it, analyze it, and more.
import matplotlib.pyplot as plt

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

#INDEXING and SLICING
c3 = c1[['ages']] #select a single column to print. A single column is a SERIES OBJECT
c4 = c1[['ages','heights']] # we can select multiple columns to print, Multiple columns is a DATAFRAME
c5 = c1.iloc[2] # prints a row according to index
c6 = c1.iloc[:3] # print the first N of rows
c7 = c1.iloc[1:3] # print rows 2 to 3
c8 = c1[(c1['ages']>18) & (c1['heights']>180)] # prints with conditions (& = AND, | = OR)

#READING DATA
df = pd.read_csv("https://www.sololearn.com/uploads/ca-covid.csv") #reads a csv file (there are other file types: read_<filetype>)
#print(df.head()) # print the first (default:5) rows of data with head() 
#print(df.head(10)) #print the first rows according to head parameter.
#print(df.tail())   # prints the last rows of the file
#print(df.info())    # prints the info  about the datasets such as number of rows, columns, data types, etc.
#df.set_index("date", inplace=True) #set our own index column by the set_index(), inplace=True specifies that change will be applied to the dataframe without the need to assign it to a new variable. print(d.head()) to see results
df.drop('state', axis=1, inplace=True) #print(d.info()) too see results
    #NOTE drop(): deletes rows or columns : axis = 0 means drop a row, axis = 1 mean drop a column
#WORKING WITH DATA
df['month'] = pd.to_datetime(df['date'], format="%d.%m.%y").dt.month_name() #added a new column called date
#print(df.head())
df.set_index('date', inplace=True)
#print(df.describe()) #describe() calculates the count, mean, std, min, 25%, 50%, 75% max of the file
#print(df['month'].value_counts()) # prints how many values appear in each ['month'] has.
#print(df.groupby('month')['cases'].sum()) #prints the number of all total values in each month
#print(df['cases'].sum()) #prints all values in one year


#MATPLOTLIB
#executing code here can generate new files
s = pd.Series([18,42,9,32,81,64,10])

    # MAKING A BAR GRAPH
s.plot(kind='bar') #plat a bar graph
#plt.savefig('subfolder/barplot.png') #save the bar graph as plot.png, makes a new file depending on file format
   
    # MAKING ALINE GRAPH
df = pd.read_csv("https://www.sololearn.com/uploads/ca-covid.csv")
df.drop('state', axis=1, inplace=True)
df['date'] = pd.to_datetime(df['date'], format="%d.%m.%y")
df['month'] = df['date'].dt.month
df.set_index('date', inplace=True)

df[df['month']==12][['cases','deaths']].plot() #plot(): line graph in default?, can make multiple lines on graph
#plt.savefig('subfolder/lineplot.png') # saves the plot() as a png

(df.groupby('month')['cases'].sum()).plot(kind='bar', stacked=True) #stacked=True attribute makes two or more columns stack on  bars of the graph
#kind='box':box plot. barh = horizontal bar
#plt.savefig('subfolder/barplot2.png')

df[df["month"]==6]["cases"].plot(kind="hist",bins=10) #make a histogram, for frequency distributions. manually specify the bins to use using the "bins" attribute
#plt.savefig('subfolder/histplot.png')

df[df["month"]==6][["cases","deaths"]].plot(kind="area",stacked=False)
#plt.savefig('subfolder/areaplot.png')

df[df["month"]==6][["cases","deaths"]].plot(kind="scatter", x='cases',y="deaths")
#plt.savefig('subfolder/scatterplot.png')

df.groupby('month')['cases'].sum().plot(kind='pie') #Not necessarily correct plotting
#plt.savefig('subfolder/pieplot.png')

df = df[df["month"]==6]
df[["cases","deaths"]].plot(kind='area', legend=True, stacked=False, color=['#1970E7','#E73E19'] ) #plot an area graph, 
plt.xlabel('Days in June')
plt.ylabel('Number')
plt.suptitle("COVID-18 in June")
plt.savefig('subfolder/areaplotWithLegends.png')


#PRINT EXAMPLES HERE 
#print(df)