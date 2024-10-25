Algoritmo "Condicional"
Var
// Seção de Declarações das variáveis
quantidade, limite : inteiro
multa, valormulta: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Insira a quantidade expressa em kg (quilograma): ")
leia(quantidade)

limite <- 50
multa <- quantidade - limite

se (quantidade > limite) entao
escreval("Há excesso. Será gerado uma multa.")
valormulta <- (multa * 4)
escreval("O valor da multa é de: ", valormulta)
senao
escreval ("Não há excesso.")
Fimse

Fimalgoritmo