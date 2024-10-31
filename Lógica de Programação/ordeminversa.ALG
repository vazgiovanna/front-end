Algoritmo "ordeminversa"
Var
// Seção de Declarações das variáveis 
num: vetor[1..5] de inteiro
i: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
para i de 1 ate 5 faca
escreval("Insira um número: ")
leia(num[i])
fimpara
limpaTela()

escreval(">>>>Ordem Inversa<<<<")
para i de 5 ate 1 passo -1 faca
escreval(num[i])
fimpara
Fimalgoritmo