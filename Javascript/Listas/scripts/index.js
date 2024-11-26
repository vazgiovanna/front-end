
fruta = [11]
teste = Array()
teste[0] = "Olha"
teste[1] = "Que"
teste[2] = "Top"

fruta[0] = "Melancia"
fruta[1] = "Tomate"
fruta[2] = "Melão"
fruta[3] = "Maracujá"
fruta[4] = "Mexerica"

console.log(fruta)
console.log(fruta[1])

// PUSH 'Empurrar' - Adicionar a Lista
fruta.push("Uva")
console.log(fruta)

// UNSHIFT - Adicionar no Começo da Lista
fruta.unshift("Abacate")
console.log(fruta)

// POP - Remover o Ultimo
fruta.pop()
console.log(fruta)

// SHIFT - Remover o Primeiro
fruta.shift()
console.log(fruta)

//SPLICE - Remove, Adiciona e Atualiza
//Onde? (Índice), Quantos vou deletar?
//Se NENHUM o que vou adicionar?
fruta.splice(2,3)
fruta.splice(2,0,"Morango")
fruta.splice(1,1,"Maracuja")
console.log(fruta)

fruta.push("Abacaxi")

for(var i = 0; i < fruta.lenght; i++){
    document.getElementById("resposta").innerHTML += `
    ${fruta[i]}<br>
    `
}

fruta.forEach(cadaFruta => {
    document.getElementById("resposta").innerHTML += `
    ${cadaFruta} <br>
    `
});