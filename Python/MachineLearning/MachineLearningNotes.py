    #Machine Learning Notes
    #By: Angelo Rafael Recio
    #Note: Libraries required, scikit-learn, panda, numpy, matplotlib

    #Statistics Review
import numpy as np
npdata = [15,16,18,19,22,24,29,30,34]
print("Mean: " + str(np.mean(npdata))) # Mean - most commonly known average
print("Median: " + str(np.median(npdata))) # Median - Middlemost value in a range
print("25th Percentile: " + str(np.percentile(npdata, 25)))  # Percentile - a measure used in statistics indicating the value below which a given percentage of observations in a group of observations fall.
print("Standard Deviation: " + str(np.std(npdata))) # Standard Deviation - how dispersed the data is in relation of the mean
print("Variance: " + str(np.var(npdata))) # Variance - Standard Deviation ^ 2

import pandas as pd
    #DataFrame - a table of Data
df = pd.read_csv('https://sololearn.com/uploads/files/titanic.csv')
print(df.head()) #head() returns first 5 rows of the DataFrame + its Header 
print(df.describe()) #returns Statistics of the columns (mean, standard deviation, etc. )

series = df[['Age','Sex']] #Series - Column/s from th DataFrame
print(series.head())

df['isMale'] = df['Sex'] == 'male' #Adds a boolean series with its condition
print(df.head())
    #Making Numpy Arrays on a DataFrame
MultiDimArray = df[['Fare','Age']].values
print(MultiDimArray) # Prints all the values of a Series/Column in an ARRAY
shapeOfArray = MultiDimArray.shape
print("Array Shape: " + str(shapeOfArray)) # Prints the shape of the array (rows, columns)
    #Select A single Element be specifying the array you want + condition
    #Array Syntax: [row:column:order] <condition>
print(MultiDimArray[0,1]) # Prints the value of the first row and second column
print(MultiDimArray[:,1] > 18) # Prints all the boolean values of the second column that are less than 18
arr = df[['Pclass','Fare','Age']].values[:10] # Selects the first 10 rows of the array
mask = arr[:,2] < 18 # Selects the boolean values of the third column that are less than 18
print(arr[mask]) # Prints the values of the array that are less than 
print(mask.sum()) # Prints the number of values that are less than 18

import matplotlib.pyplot as plt
plt.scatter(df['Age'], df['Fare'], c=df['Pclass']) # Plots the Age vs Fare
plt.plot([0,80],[85,5]) # Plots a line between 0 and 80, and 85 and 5
plt.xlabel('Age')
plt.ylabel('Fare')
plt.savefig('Python/MachineLearning/charts/AgeVsFare.png') # Saves the chart as a PNG
