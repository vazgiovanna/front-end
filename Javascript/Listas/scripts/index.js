/*var fruta1 = 'Melancia'
var fruta2 = 'Melão'
var fruta3 = 'Morango'
var fruta4 = 'Maracujá'
var fruta5 = 'Mexerica*/

fruta = [11]
teste = Array()
teste[0] = 'Olha'
teste[1] = 'que'
teste[2] = 'legal'

console.log(fruta)
console.log(fruta[1])

// push 'empurrar' - adicionar na lista
fruta.push('Uva')
console.log(fruta)

// unshift - adicionar no começo da lista
fruta.unshift('Abacate')
console.log(fruta)

// pop - remove o último
fruta.pop()
console.log(fruta)

// shift - remover o primeiro
fruta.shift()
console.log(fruta)

fruta.splice(2,3)
fruta.splice(2,0"Morango")
fruta.splice(1,1"Maracuja")
console.log(fruta)

fruta.push("Abacaxi")

for(var i = 0; i < fruta.length, i++){
    document.getElementById("resposta").innerHTML += `${fruta[i]} <br>`
}

fruta.forEach(cadaFruta => {

})
