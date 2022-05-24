const pokemons = require("./mock-pokemon")

exports.success = (message, data) => {
    return { message, data } }

exports.getUniqueId = (pokemons) => {
    const pokemonIds = pokemons.map(pokemon => pokemon.id)
    const maxID = pokemonIds.reduce((a,b) => Math.max(a,b))
    const uniqueId = maxID + 1
    return uniqueId
}