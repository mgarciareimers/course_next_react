import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';


export const metadata = {
    title: 'Favourites',
    description: 'Favourites pokemons list list',
};

export default async function PokemonsPage() {
    return (
        <div className='p-2 flex flex-col'>
            <span className='text-5xl my-2'>Favourite Pokemons List <small className='text-blue-500'>(global state)</small></span>
            
            <PokemonGrid pokemons={ [] } />
        </div>
    );
}