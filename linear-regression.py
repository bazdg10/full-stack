import pandas as pd
import matplotlib.pyplot as plt  
from sklearn.linear_model import LinearRegression  
import numpy as np
from sklearn.metrics import mean_squared_error   


#### Your Code Goes Here #### 
dataframe = pd.read_csv('student_scores.csv')
dataframe.describe()
Y = dataframe['Scores'].values.reshape(-1, 1)
X = dataframe['Hours'].values.reshape(-1, 1)
#plt.plot(X, Y, 'o')
#plt.show()

X_train, Y_train = X[:15], Y[:15]
X_test, Y_test = X[15:], Y[15:]

model = LinearRegression()
model.fit(X_train, Y_train)

regressionLine = model.predict(X)
#plt.plot(X, regressionLine)
#plt.plot(X_train, Y_train, 'o')
#plt.plot(X_test, Y_test, 'o')
#plt.show()
Y_predictions = model.predict(X_test)
#plt.plot(X_test, Y_predictions, 'o')
#plt.plot(X_test, Y_test, 'o')
#plt.legend(["pink", "blue"])
#plt.show()
print ("Mean Square Error : ", mean_squared_error(Y_test, Y_predictions))