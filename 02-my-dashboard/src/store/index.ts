import { configureStore, Middleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';

import counter from './counter/counterSlice';
import pokemons from './pokemons/pokemonsSlice';

export const store = () => {
  return configureStore({
    reducer: {
      counter,
      pokemons,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
  });
}

// Infer the `RootState` and `AppDispatch` types from the store itself.
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Use throughout your app instead of plain `useDispatch` and `useSelector`.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();