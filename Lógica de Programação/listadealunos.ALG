Algoritmo "listadealunos"

Var
// Seção de Declarações das variáveis 
alunos: vetor[1..5] de caractere
i: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
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