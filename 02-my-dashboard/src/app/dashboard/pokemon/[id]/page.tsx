import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Pokemon, PokemonContent } from '@/pokemons';

interface Props {
    params: {
        id: string
    },
}

// !Executed only in project build time.
export const generateStaticParams = async () => {
    return Array.from({ length: 151 }).map((value, index) => ({
        id: `${ index + 1 }`
    }));
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    try {
        const { id, name } = await getPokemon(params.id)

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

const getPokemon = async(id: string): Promise<Pokemon> => {
    try {
        const pokemon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${ id }`, { 
                // cache: 'force-cache', 
                next: {
                    revalidate: 60 * 60 * 30 * 6 // Revalidate every 6 months.
                } 
            })
        .then((response: Response) => response.json());
    
        return pokemon;
    } catch(e) {
        notFound();
    }
}

export default async function PokemonPage({ params }: Props) {
    const pokemon = await getPokemon(params.id);

    return (
        <PokemonContent pokemon={ pokemon } />   
    );
}