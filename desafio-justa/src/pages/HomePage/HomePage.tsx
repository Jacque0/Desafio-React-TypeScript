import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import PokeCard from '../../components/PokeCard/PokeCard'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import { HomeContainer, PokemonsArea } from './styleHome'

export default function HomePage() {
    const pokemonsRequest = useRequestData(`${BASE_URL}?limit=50`)
    const [inputValue, setInputValue] = useState("");
    const [pokemonsList, setPokemonsList] = useState({})

    type ObjectPokemon = {
        name: string,
        url: string
    }
    type ObjectData = {
        count: number,
        next: string,
        previous: any,
        results: ObjectPokemon[]
    }

    const handleChange = (event:any) => {
        setInputValue(event.target.value);
    };
    const pokemons = pokemonsRequest[0] as ObjectData
    const error = pokemonsRequest[1]
    const loading = pokemonsRequest[2]
    

    useEffect(()=>{
        if (pokemons.results){
            const pokemonsArray = pokemons.results as ObjectPokemon[]
            const pokemonsFilter = pokemonsArray.filter((item: ObjectPokemon) => {
                if( inputValue === "") {
                return 
                } else {
                return item.name.toUpperCase().includes(inputValue.toUpperCase())
                }
            }).map((item)=>{
                return <PokeCard pokemonName={item.name} />
            })
            setPokemonsList(pokemonsFilter)
        }
    }, [inputValue, pokemons])
    


 
    return (
      <>
          <Header title='Bem-vindo a busca de Pokémons' />
          <HomeContainer>
            <input
                placeholder='Digite o nome do pokémon'
                value={inputValue}
                onChange={handleChange} />
            <PokemonsArea>
                {!loading && pokemons.results && pokemonsList}
            </PokemonsArea>
          </HomeContainer>
      </>
    )
}
