Algoritmo "Condicional"
Var
// Se��o de Declara��es das vari�veis
quantidade, limite : inteiro
multa, valormulta: real


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Insira a quantidade expressa em kg (quilograma): ")
leia(quantidade)

limite <- 50
multa <- quantidade - limite

se (quantidade > limite) entao
escreval("H� excesso. Ser� gerado uma multa.")
valormulta <- (multa * 4)
escreval("O valor da multa � de: ", valormulta)
senao
escreval ("N�o h� excesso.")
Fimse

Fimalgoritmo