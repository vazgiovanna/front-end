Algoritmo "listadealunos"

Var
// Se��o de Declara��es das vari�veis 
alunos: vetor[1..5] de caractere
i: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
para i de 1 ate 5 faca
     leia (alunos[i])
fimpara

limpaTela()
escreval("Lista de Alunos")

para i de 1 ate 5 faca
     escreval("-------------------------")
     escreval("Aluno(a): ", alunos[i])
     escreval("-------------------------")
fimpara
Fimalgoritmo