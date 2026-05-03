import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{ id: 1, pok_name: "alexandr", pok_element: "water" }];

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    addPokemon: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(pok_name, pok_element) {
        return {
          payload: {
            id: nanoid(),
            pok_name,
            pok_element,
          },
        };
      },
    },
  },
});

export const pokemonReducer = pokemonsSlice.reducer;
export const { addPokemon } = pokemonsSlice.actions;