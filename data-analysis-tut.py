import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset("tips")

#print(df.head())
#print(df.corr())
#sns.heatmap(df.corr())
#plt.show()
#univariate analysis
#sns.joinplot(x='tip', y='total_bill', data=df, kind="hex")
#sns.pairplot(df, hue='sex')
#plt.show()
#distplot shows the distribution of column's features.

#categorical plots
#sns.countplot('sex', data = df)
#sns.countplot(y = 'sex', data = df)
#plt.show()