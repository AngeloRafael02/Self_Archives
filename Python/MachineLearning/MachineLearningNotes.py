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
