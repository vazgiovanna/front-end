function atividade1(){
    escolha = prompt("Insira o número que corresponde a operação que deseja fazer: 1. Soma | 2. Subtração | 3. Divisão | 4. Multiplicação")
    numero1 = Number(prompt("Insira o primeiro número: "))
    numero2 = Number(prompt("Insira o segundo número: "))

    switch(escolha){
        case '1': 
            resultado = numero1 + numero2
            alert('Total da soma: '+resultado)
            break
        case '2':
            resultado = numero1 - numero2
            alert('Total da Subtração: '+resultado)
            break
        case '3':
            resultado = numero1 / numero2
            alert('Total da Divisão: '+resultado)
            break
        case '4':
            resultado = numero1 * numero2
            alert('Total da Multiplicação: '+resultado)
            break
    }
}

function atividade2(){
       Nota = Number(prompt('Informe a sua média:'))
       if ( Nota >=7){
          alert('Aluno(a) Aprovado!')
       }else{
           alert('Aluno(a) Reprovado!')
       }

}

function atividade3(){
    escolha = prompt('Digite um número de 1 a 7')    
switch(escolha){
     case '1':
        alert('Segunda-feira')
        break
     case '2':
        alert('Terça-feira')
        break 
     case '3':alert('Quarta-feira')
        break
     case '4':alert('Quinta-feira')
        break
      case'5':alert('Sexta-feira')
        break
        case '6':alert('Sabádo')
        break
        case '7':alert('Domingo')
        break
}
}