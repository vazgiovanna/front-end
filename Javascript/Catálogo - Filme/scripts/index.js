function carregarCatalogo(){
    var filmes =[
        ['images/livrodeclinio.jpg', 'Declínio de um homem'],
        ['images/noitesbrancas.jpg', 'Noites brancas'],
        ['images/evelynhugo.jpg', 'Os 7 maridos de Evelyn Hugo'],
        ['images/conde.jpg', 'O conde de monte cristo'],
        ['images/crimecastigo.jpg', 'Crime e castigo'],
        ['images/miseraveis.jpg', 'Os miseráveis'],
    ]

    filmes.forEach(cadaFilme => {
        document.getElementById('catalogo').innerHTML +=`
        <div class="filme">
                <img src="${cadaFilme[0]}">
                <h4>${cadaFilme[1]}</h4>
                <button>Adicionar
                    <img src="/images/plus-circle.svg">
                </button>
            </div>`
    })
}

carregarCatalogo()
