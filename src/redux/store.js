import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemons/pokemonsSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});