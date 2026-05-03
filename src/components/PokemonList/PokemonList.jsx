import { useSelector } from "react-redux";
import { getPokemons } from "../../redux/pokemons/pokemonsSelectors";
import { Pokemon } from "../Pokemon/Pokemon";
export const PokemonList = () => {
    const pokemons = useSelector(getPokemons);
    return ( 
        <ul>
            {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </ul>
    )
};