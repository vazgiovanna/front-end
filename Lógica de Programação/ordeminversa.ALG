Algoritmo "ordeminversa"
Var
// Se��o de Declara��es das vari�veis 
num: vetor[1..5] de inteiro
i: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
para i de 1 ate 5 faca
escreval("Insira um n�mero: ")
leia(num[i])
fimpara
limpaTela()

escreval(">>>>Ordem Inversa<<<<")
para i de 5 ate 1 passo -1 faca
escreval(num[i])
fimpara
Fimalgoritmo