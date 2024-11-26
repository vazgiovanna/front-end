function testes(){
    // while (contador < 3){
    //     alert('Que daora! :)' fiz '${contador+1} 'vezes!')
    //     contador++
    // }

    for(var i= 0; i < 3; i++){
        alert(`Que daora :) fiz ${i+1} vezes!`)
    }
}
//testes()

function carregarCatalogo(){
    var livros =[
        ['images/livrodeclinio.jpg', 'Declínio de um homem'],
        ['images/noitesbrancas.jpg', 'Noites brancas'],
        ['images/evelynhugo.jpg', 'Os 7 maridos de Evelyn Hugo'],
        ['images/conde.jpg', 'O conde de monte cristo'],
        ['images/crimecastigo.jpg', 'Crime e castigo'],
        ['images/miseraveis.jpg', 'Os miseráveis'],
    ]

    livros.forEach(cadaLivro => {
        document.getElementById('catalogo').innerHTML +=`
        <div class="livro">
                <img src="${cadaLivro[0]}">
                <h4>${cadaLivro[1]}</h4>
                <button>Adicionar
                    <img src="images/plus-circle.svg">
                </button>
            </div>`
    })
}

carregarCatalogo()