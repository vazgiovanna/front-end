const filmes ={
    'Nome' : 'Sociedade da Neve',
    'Desc' : 'Lorem',
    'Gênero' : 'Drama'
}

console.log(filmes)
console.log(filmes.Nome)

// keys - retorna os atributos (nomes)
const filmesKey = Object.keys(filmes)
console.log(filmesKey)

// entries - retorna em lista os valores (valor)
const filmesEntries = Object.entries(filmes)
console.log(filmesEntries)

// map
const nomesFilmes = ['Ilha do Medo', 'Bruxa de Blair', 'Interestelar', 'Velozes e Furiosos']

const lista = {
    'filmes' : [
        {
            'Nome' : 'Ilha do Medo',
            'Desc' : 'Lorem'
        },
        {
            'Nome' : 'Bruxa de Blair',
            'Desc' : 'Lorem'
        },
    ],
    'jogos': [
        {
            'Nome' : 'Roblox',
            'Desc' : 'Lorem' 
        },
        {
            'Nome' : 'The Last of Us',
            'Desc' : 'Lorem'
        },
        {
            'Nome' : 'Stalker 2',
            'Desc' : 'Lorem'
        }
    ]
}

const resultado = lista.jogos.map((elemento) =>{
    document.querySelector('body').innerHTML += `
    <h3> ${elemento.Nome} </h3>
    `
})