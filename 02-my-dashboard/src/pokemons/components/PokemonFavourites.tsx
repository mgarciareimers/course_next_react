'use client';

import Link from 'next/link';
import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid'
import { useEffect, useRef, useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonFavourites = () => {
    const favourites = useAppSelector((state) => state.pokemons.favourites);

    const [ pokemons, setPokemons ] = useState(Object.values(favourites));
    
    const isLoad = useRef<boolean>(false);

    useEffect(() => {
        if (isLoad.current || Object.values(favourites).length === 0) {
            return;
        }

        setPokemons(Object.values(favourites));
    }, [ favourites ])
    
    
    return (
        pokemons.length === 0
            ? (
                <div className='flex flex-col h-[50vh] items-center justify-center'>
                    <IoHeartOutline size={ 50 } className='text-red-500' />
                    <p>No favourites have been added. Go to the <Link className='text-blue-500' href='/dashboard/pokemons'>pokemons page</Link> and add one.</p>
                </div>
            )
            : (
                <PokemonGrid pokemons={ pokemons } />
            )
    )
}