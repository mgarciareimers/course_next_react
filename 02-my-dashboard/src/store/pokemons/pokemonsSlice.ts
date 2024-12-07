import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state[id] !== undefined) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    }
  }
});

export const {
  toggleFavourite,
} = pokemonsSlice.actions

export default pokemonsSlice.reducer