import pandas as pd

x= pd.read_csv("notas_alunos.csv")

x['media'] = (x['Notas1'] + x['Notas2']) /2
x['situacao'] = ""

x.loc[x["media"]<7,"situacao"] = "reprovado"
x.loc[x["media"]>=7,"situacao"] = "Aprovado"
print(x)