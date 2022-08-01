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
plt.savefig('charts/AgeVsFare.png') # Saves the chart as a PNG

    # TERMS
    # Supervised Learning - having historical data used to inform the model
        # Classification - the model is trained to predict the class of an object (non-numerical Value)   
        # Regression - the model is trained to predict the value of an object (numerical Value)  

    # Logic Regression Model
    # Logic Regression is a supervised learning model that is used to predict the value of a target variable based on the values of one or more input variables.
    # The equation for calculation the score of a logic regression model is: 1/(1+e^(ax + by + c)) <also called the sigmoid function>

    # Preparing Data for Model (using the same titanic.csv)
from sklearn.linear_model import LogisticRegression
    # First, we need to make all our columns numerical
df['male'] = df['Sex'] == 'male'
    # Then, take all the feature and create a numpy array by taking all the columns we are interested in and using the values method to convert it to numpy array and store it in 'X'
X = df[['Pclass','male','Age','Siblings/Spouses','Parents/Children','Fare']].values
    # Next, we take the target and Store it in 'Y'
Y = df['Survived'].values
    # Then, instantiate 'LogisticRegression' and use the fit method to build the model
model = LogisticRegression()
model.fit(X,Y)
print(model.coef_) # Prints the coefficients of the model
print(model.intercept_) # Prints the intercept of the model
    # Use Predict method to make predictions
print(model.predict([[3, True, 22.0, 1, 0, 7.25]])) # Predicts the first passenger in the dataset
    # Predict the first 5 rows of data (X[:5]) and compare it to the target array (Y[:5])
print(model.predict(X[:5]))
print(Y[:5])
    # Make an accuracy score by creating an array that has the target values 
y_pred = model.predict(X)
    # Then create an array of the boolean values of whether or not the prediction is correct
print(str((Y == y_pred).sum()) +'/'+ str(len(Y))) # Prints the number of correct predictions
print((Y == y_pred).sum()/len(Y)) # Prints the accuracy of the model
print(model.score(X,Y)) # Prints the accuracy of the model (same as above)