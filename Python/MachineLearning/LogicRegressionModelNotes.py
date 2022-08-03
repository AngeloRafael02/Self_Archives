import pandas as pd
from sklearn import metrics
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

    #MODEL EVALUATION
    #Evaluation metrics:
        # Accuracy - the percent of predictions that are correct.
        # Confusion matrix - records of all data points predicted positive that are actually positive, predicted negative that are actually negative, etc.
            # names for each square of the confusion matrix:
            # true positive (TP) - datapoint is predicted positvely and is actually positive
            # false positive (FP) - datapoint is predicted positvely and is actually negative
            # true negative (TN) - datapoint is predicted negatively and is actually negative
            # false negative (FP) - datapoint is predicted negatively and is actually positive