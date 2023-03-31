const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150";
const cards = document.querySelector(".pokemons");

function dadosPokemon(pokemon) {
  return `  
            <card-pokemon
                nome=${pokemon.name}
                numero=${pokemon.order}
                imagem=${pokemon.sprites.front_default}
                tipos=${JSON.stringify(pokemon.types)}
                tipoPrincipal = ${pokemon.types[0].type.name}
            ></card-pokemon>
    `;
}

function getPokemon(url){
    fetch(url)
        .then(resp => resp.json())
        .then(pokemon => cards.innerHTML += dadosPokemon(pokemon))
}

fetch(url)
    .then(response => response.json())
    .then(response => response.results.forEach(dados => getPokemon(dados.url)))
    .catch(response => console.log(response));