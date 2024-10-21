import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

labels = ['A', 'B', 'C', 'D']
sizes = [15, 30, 45, 10]

plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
plt.title('Diagramme Circulaire')
plt.show()
