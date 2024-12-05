import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Pokemon, PokemonContent, PokemonsResponse } from '@/pokemons';

interface Props {
    params: {
        name: string
    },
}

export const dynamicParams = false;
export const revalidate = 86400;

// !Executed only in project build time.
export const generateStaticParams = async () => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
        .then((response: Response) => response.json());

    const pokemons = data.results.map((pokemon: any) => ({
        id: pokemon.url.split('/').at(-2),
        name: pokemon.name
    }));

    return pokemons;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    try {
        const { id, name } = await getPokemon(params.name);

        return {
            title: `#${ id } - ${ name.toUpperCase() }`,
            description: `Page of pokemon :${ name.toUpperCase() }`
        }
    } catch(e) {
        return {
            title: `Pokemon page error`,
            description: `An error occured.`
        }
    }
}

const getPokemon = async(name: string): Promise<Pokemon> => {
    try {
        const pokemon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${ name }`, { 
                // cache: 'force-cache', 
                next: {
                    revalidate: 60 * 60 * 24 // Revalidate every 24h (86400s).
                } 
            })
        .then((response: Response) => response.json());
    
        return pokemon;
    } catch(e) {
        notFound();
    }
}

export default async function PokemonPage({ params }: Props) {
    const pokemon = await getPokemon(params.name);

    return (
        <PokemonContent pokemon={ pokemon } />   
    );
}