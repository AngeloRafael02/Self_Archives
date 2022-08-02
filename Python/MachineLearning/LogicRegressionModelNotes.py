import pandas as pd
from sklearn.datasets import load_breast_cancer
from sklearn.linear_model import LogisticRegression

cancer_data = load_breast_cancer()
    # DataFrame() - use DataFrame to make a 'table' of the data
df = pd.DataFrame(cancer_data['data'], columns=cancer_data['feature_names'])
df['target'] = cancer_data['target']

    #Building the Data
X = df[cancer_data.feature_names].values
y = df['target'].values
    #Instantiate Logic Regression Model
model = LogisticRegression(solver='liblinear') # Use solver='liblinear' as an argument to switch to another solver (all solvers for scikit-lears are in this documentation: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html )
model.fit(X, y)
print("prediction for datapoint 0:", model.predict([X[0]]))
print(model.score(X, y))