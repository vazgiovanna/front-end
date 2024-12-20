const receitas = [
    {
        categoria: "Salgado",
        nome: "Esfiha de Carne",
        ingredientes: [
            "500g de farinha de trigo",
            "10g de fermento biológico seco",
            "300ml de água morna",
            "2 colheres de sopa de açúcar",
            "500g de carne moída",
            "Temperos a gosto"
        ],
        preparo: "Misture os ingredientes da massa e deixe descansar por 1 hora. Recheie com carne temperada, modele as esfihas e asse em forno pré-aquecido a 180°C por 25 minutos."
    },
    {
        categoria: "Doce",
        nome: "Brigadeiro",
        ingredientes: [
            "1 lata de leite condensado",
            "2 colheres de sopa de cacau em pó",
            "1 colher de sopa de manteiga",
            "Granulado para decorar"
        ],
        preparo: "Misture o leite condensado, cacau e manteiga em fogo médio até engrossar. Deixe esfriar, enrole e passe no granulado."
    },
    {
        categoria: "Sucos",
        nome: "Suco de Abacaxi com Hortelã",
        ingredientes: [
            "1 abacaxi descascado e picado",
            "500ml de água gelada",
            "10 folhas de hortelã",
            "Açúcar ou adoçante a gosto"
        ],
        preparo: "Bata todos os ingredientes no liquidificador até ficar homogêneo. Coe e sirva gelado."
    }
];

function exibirReceitas() {
    const container = document.getElementById("containerReceita");

    receitas.map(receita => {
        const card = document.createElement("div");
        card.classList.add("cardReceita");

        const title = document.createElement("h2");
        title.textContent = `${receita.categoria}: ${receita.nome}`;
        card.appendChild(title);

        const nomeIngrediente = document.createElement("h3");
        nomeIngrediente.textContent = "Ingredientes:";
        card.appendChild(nomeIngrediente);

        const list = document.createElement("ul");
        receita.ingredientes.map(ingrediente => {
            const listItem = document.createElement("li");
            listItem.textContent = ingrediente;
            list.appendChild(listItem);
        });
        card.appendChild(list);

        const preparo = document.createElement("p");
        preparo.classList.add("metodo");
        preparo.textContent = `Modo de Preparo: ${receita.preparo}`;
        card.appendChild(preparo);

        container.appendChild(card);
    });
}
window.onload = exibirReceitas;
