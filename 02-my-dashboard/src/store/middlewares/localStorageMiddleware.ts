import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from '..';

export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {
        next(action);
        switch (action.type) {
            case 'pokemons/toggleFavourite': return onToggleFavourite(state);
            default: break;
        }
    }
}

const onToggleFavourite = (state: MiddlewareAPI) => {
    const { pokemons } = state.getState() as RootState;
    localStorage.setItem('favourite-pokemons', JSON.stringify(pokemons.favourites));
}