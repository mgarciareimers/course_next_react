'use client';

import { Provider } from 'react-redux';
import { store, AppStore } from './';
import { useEffect, useRef } from 'react';
import { setInitialFavourites } from './pokemons/pokemonsSlice';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
    const storeRef = useRef<AppStore>();

    // Create the store instance the first time this renders.
    if (!storeRef.current) {
        storeRef.current = store();
    }

    // Load from memory.
    useEffect(() => {
        const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}');
        storeRef.current!.dispatch(setInitialFavourites(favourites));
    }, []);
    
    return (
        <Provider store={ storeRef.current } >
            { children }
        </Provider>
    );
}
