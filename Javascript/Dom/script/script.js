// URL - Location
// Botão de voltar - history
// Site / conteúdo - document

//window.location = "https://www.last.fm/pt/music/Bj%C3%B6rk/+wiki"
// getElementById - busca sujeito por id
// inner - insere um elemento

document.getElementById('catalogo').innerHTML ='<h3>oie<\h3>'
document.querySelector('#catalogo').innerHTML = 'olá :)'

function registrarNome(){
    nome = document.querySelector('#inputNome').value

    document.querySelector('#catalogo').innerHTML = `
    <div id="nomeDiv">
    eu ${nome} sou muito top e programador!
    </div>`
    alert('O seu nome é '+nome)
}   