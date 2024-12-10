'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavourite } from '@/store/pokemons/pokemonsSlice';

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon } : Props) => {
    const isFavourite = useAppSelector((state) => state.pokemons.favourites[pokemon.id] !== undefined);

    const dispatch = useAppDispatch();

    const onToggle = () => {
        dispatch(toggleFavourite(pokemon));
    }

    return (
        <div className='mx-auto right-0 mt-2 w-60'>
            <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
                <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b'>
                    <Image
                        alt={ pokemon.name }
                        src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg` }
                        width={ 0 }
                        height={ 0 }
                        style={{ height: '90px', width: 'auto' }}    
                        priority={ false }
                    />

                    <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>{ pokemon.name }</p>
                    <div className='mt-5'>
                        <Link
                            href={ `/dashboard/pokemons/${ pokemon.name }` }
                            className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
                        >
                            More information
                        </Link>
                    </div>
                </div>
                <div className='border-b'>
                    <div onClick={ onToggle } className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer'>
                        <div className='text-red-600'>
                            {
                                isFavourite 
                                    ? (<IoHeart />)
                                    : (<IoHeartOutline />)
                            }
                        </div>
                        <div className='pl-3'>
                            <p className='text-sm font-medium text-gray-800 leading-none'>
                                {
                                    isFavourite
                                        ? 'Remove from favourites'
                                        : 'Add to favourites'
                                }
                            </p>

                        
                        <p className='text-xs text-gray-500'>Click to add/remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}