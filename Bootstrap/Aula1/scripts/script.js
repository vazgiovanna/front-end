lista_categorias = []

class Categoria{
    constructor(titulo, img, desc, marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('Sucos', 'images/suco.jpg', 'Diversos sabores disponíveis no mercado!', 'Laranja, Limão, Morango...','Suco fabricado pela @Marca'))
lista_categorias.push(new Categoria('Refrigerantes', 'images/refrigerantes.jpg', 'Diversos sabores disponíveis no mercado!', 'Coca-cola, schwepps, fanta','Refrigerantes fabricado pela Brasal'))
lista_categorias.push(new Categoria('Energéticos', 'images/energetico.jpg', 'Diversos sabores disponíveis no mercado!', 'Monster, Redbull...','Bebidas fabricado pela @Marca'))
lista_categorias.push(new Categoria('Achocolatados', 'images/achocolatado.jpg', 'Bebidas achocolatadas', 'Diversas marcas','Bebidas fabricado pela @Marca'))
lista_categorias.push(new Categoria('Cervejas', 'images/cerveja.jpg', 'Diversos tipos disponíveis!', 'Heineken, Amstel, Brahma...','Bebidas fabricado pela @Marca'))
lista_categorias.push(new Categoria('Café', 'images/cafe.jpg', 'Diversos grãos disponíveis no mercado!', 'Café Export, Três Corações...','Bebidas fabricado pela @Marca'))
lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
     <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
    </div>

    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${categoria.titulo}</h5>
            <p class="card-text">Diversos sabores disponíveis no mercado!</p>
            <p class="card-text"><small class="text-body-secondary">${categoria.desc}</small></p>
            <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                </div>s
            </div>
        </div>
     </div>    
    `
})

