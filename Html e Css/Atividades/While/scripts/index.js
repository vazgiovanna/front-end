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
    for(let i = 0; i < 4; i++){
        document.getElementById('catalogo').innerHTML +=`
        <div class="livro">
                <img src="/images/livrodeclinio.jpg">
                <h4>Declínio de um homem</h4>
                <button>Adicionar
                    <img src="/images/plus-circle.svg">
                </button>
            </div>`
    }
}

carregarCatalogo()