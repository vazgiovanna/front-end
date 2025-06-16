api = "https://pokeapi.co/api/v2/";
endpoint = "pokemon";

consulta = api + endpoint;

fetch(consulta).then((resposta) => resposta.json()).then((dados) => {
 // console.log(dados);
dados.results.map((infoPokemon) => {
    // console.log(infoPokemon)
    // listar informações de cada pokemon
    fetch(infoPokemon.url).then((resposta) => resposta.json()).then((dadosDeCadaPoke) =>{
        console.log(dadosDeCadaPoke);
        document.querySelector("#pokemons").innerHTML += `
            <div class="pokemon card p-4 d-flex align-items-center">
                <img src="${dadosDeCadaPoke.sprites.front_default}"
                <h4>${dadosDeCadaPoke.name}</h4>
            </div>
        `
    })
    })
})