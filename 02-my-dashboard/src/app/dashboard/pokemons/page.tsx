import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon []> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
        .then((response: Response) => response.json());

    const pokemons = data.results.map((pokemon: any) => ({
        id: pokemon.url.split('/').at(-2),
        name: pokemon.name
    }));

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons: SimplePokemon [] = await getPokemons(151);

    return (
        <div className='p-2 flex flex-col'>
            <span className='text-5xl my-2'>Pokemons List <small>(static)</small></span>
            
            <PokemonGrid pokemons={ pokemons } />
        </div>
    );
}