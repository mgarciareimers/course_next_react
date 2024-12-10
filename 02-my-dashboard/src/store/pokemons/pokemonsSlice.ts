import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favourites: { [key: string]: SimplePokemon },
}

const initialState: PokemonsState = {
  favourites: {}
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setInitialFavourites(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favourites = action.payload;
      return state;
    },
    toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state.favourites[id] !== undefined) {
        delete state.favourites[id];
        return;
      }

      state.favourites[id] = pokemon;
    }
  },
});

export const {
  toggleFavourite,
  setInitialFavourites,
} = pokemonsSlice.actions

export default pokemonsSlice.reducer