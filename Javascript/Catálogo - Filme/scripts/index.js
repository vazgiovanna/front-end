function carregarCatalogo(){
    var filmes =[
        ['images/500days.jpg', '500 dias com ela'],
        ['images/aindaestouaqui.jpg', 'Ainda estou aqui'],
        ['images/blackswan.jpg', 'Cisne Negro'],
        ['images/butterfly.jpg', 'Efeito Borboleta'],
        ['images/eternalsunshine.jpg', 'Brilho eterno de uma mente sem lembranças'],
        ['images/shutterisland.jpg', 'Ilha do Medo'],
    ]

    filmes.forEach(cadaFilme => {
        document.getElementById('catalogo').innerHTML +=`
        <div class="filme">
                <img src="${cadaFilme[0]}">
                <h4>${cadaFilme[1]}</h4>
                <button>Adicionar
                    <img src="images/plus-circle.svg">
                </button>
            </div>`
    })
}

carregarCatalogo()
