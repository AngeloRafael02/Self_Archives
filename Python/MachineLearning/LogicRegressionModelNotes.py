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
model = LogisticRegression(solver='liblinear') # Use solver='liblinear' as an argument to switch to another solver (all solvers for scikit-learn  are in this documentation: https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html )
model.fit(X, y)
print("prediction for datapoint 0:", model.predict([X[0]]))
print(model.score(X, y))

    #MODEL EVALUATION
    #Evaluation metrics:
        # Accuracy - the percent of predictions that are correct.
        # Confusion matrix - records of all data points predicted positive that are actually positive, predicted negative that are actually negative, etc.
            # names for each square of the confusion matrix:
            # true positive (TP) - datapoint is predicted positvely and is actually positive (Top-Left)
            # false positive (FP) - datapoint is predicted positvely and is actually negative (Top-Right)
            # true negative (TN) - datapoint is predicted negatively and is actually negative (Bottom-Left)
            # false negative (FP) - datapoint is predicted negatively and is actually positive (Bottom-Right)
        # Precision - refers to the percentage of positive results which are relevant and recall to the percentage of positive cases correctly classified.
            # Precision Equation: Positives Predicted Correctly / All Positive Predictions || TP/(TP+FP)
        # Recall - a measure of how many of the positive cases the model can recall.
            # Recall Equation: Positives Predicted Correctly / All Positive Cases || TP/(TP+FN)
        # Precision and Recall Trade-Off
            # Building Models can be made by increasing recall while lowering precision or vice versa, it depends on the dataset on how we adjust it 
        # F1 Score - Average of Precision and Recall as a single score for the model
            # F1 Score Equation: F1 = 2 * ((precision * recall) / (precision + recall))

from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix

y_pred = model.predict(X)

print("Accuracy: " + str(accuracy_score(y,y_pred)))
print("Precision: " + str(precision_score(y,y_pred)))
print("Recall: " + str(recall_score(y,y_pred)))
print("F1 Score: " + str(f1_score(y,y_pred)))
print("Confusion Matrix:  \n" + str(confusion_matrix(y,y_pred)) + "\n") #NOTE:the output in order is changed - TN, FN, TP, FP

    # Notable Terms
        # Overfitting - occurs when the model is too complex to be useful, and is not able to generalize to new data.
            # https://api.sololearn.com/DownloadFile?id=3781 - in this link the is a picture of a overfitting graph 
    # To give the model a fair assessment we need to know how the model performs on new data.
        # the standard ratio of test data to training data is 70-80 : 20-30