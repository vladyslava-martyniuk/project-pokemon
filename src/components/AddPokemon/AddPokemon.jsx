import { useDispatch } from "react-redux";
import { addPokemon } from "../../redux/pokemons/PokemonsSlice";
export const AddPokemonForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
   e.preventDefault();
   const pok_name = e.target.pok_name.value;
   console.log(pok_name);
   const pok_el = e.target.pok_el.value;
   console.log(pok_el);
   dispatch(addPokemon(pok_name, pok_el));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create your pokemAn</h1>
        <label>
          <p>Enter name of your pokemon</p>
          <input name="pok_name" type="text" />
        </label>
        <label>
          <p>Enter element</p>
          <input name="pok_el" type="text" />
        </label>
        <button type = "submit" >Create</button>
      </form>
      
    </>
  );
};
