const poke_container = document.getElementById('poke_container')

const pokemon_number = 150


const fetchPokemon = async () => {
  for(let i=0; i <= pokemon_number; i++) {
    await getPokemon(i)
  }
}

const getPokemon = async id => {
  const url = 
  `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const pokemon = await res.json()
  createPokemonCard(pokemon)
}

fetchPokemon();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement('div')
  pokemonEl.classList.add('pokemon')

  const pokeInnerHtml = `
    ${pokemon.id}
  `;

  pokemonEl.innerHTML = pokeInnerHtml;

  poke_container.appendChild(pokemonEl)
}