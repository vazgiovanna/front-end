Algoritmo "Times"
// Disciplina   : [Linguagem e L�gica de Programa��o] 
// Professor   : Antonio Carlos Nicolodi 

Var
// Se��o de Declara��es das vari�veis 
clube1, clube2: caractere
gol1, gol2: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("======================")
escreval("Brasileir�o - S�rie A")
escreval("======================")

escreval("Insira o nome do clube 1: ")
leia(clube1)
escreval("Qual a quantidade de gols do ", clube1, "?")
leia(gol1)
limpaTela()

escreval("Insira o nome do clube 2: ")
leia(clube2)
escreval("Qual a quantidade de gols do ", clube2, "?")
leia(gol2)
limpaTela()

se (gol1 > gol2) entao
escreval("O ", clube1," venceu a partida. Saldo de ", gol1, " gols.")
senao escreval("O ", clube2," venceu a partida. Saldo de ", gol2," gols.")
senao escreval("Empate!")
Fimse


Fimalgoritmo