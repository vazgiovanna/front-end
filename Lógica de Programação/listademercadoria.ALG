Algoritmo "listademercadoria"

Var
merc: vetor [1..3] de caractere
valor: vetor [1..3] de real
i: inteiro
media, valorTotal: real

Inicio

para i de 1 ate 3 faca
escreval("Insira o nome da ",i,"� mercadoria: ")
leia(merc[i])
escreva("Valor da mercadoria: ")
leia(valor[i])
valorTotal <- valorTotal + valor[i]
fimpara

media <- (valorTotal/3)

escreval("A m�dia �:", media:2:2)
escreval("O valor total das mercadorias � de: ", valorTotal:2:2)



Fimalgoritmo