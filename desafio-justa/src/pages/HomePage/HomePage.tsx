import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import PokeCard from '../../components/PokeCard/PokeCard'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import { HomeContainer, PokemonsArea } from './styleHome'
import { ObjectData, ObjectPokemon } from '../../constants/Types'
import { Loading } from '../../components/Loading/Loading'

export default function HomePage() {
    const pokemonsRequest = useRequestData(`${BASE_URL}?limit=50`)
    const [inputValue, setInputValue] = useState("");
    const [pokemonsList, setPokemonsList] = useState({})

    const handleChange = (event:any) => {
        setInputValue(event.target.value);
    };
    const pokemons = pokemonsRequest[0] as ObjectData
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
            }).map((item: ObjectPokemon)=>{
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
                {loading && <Loading />}
                {!loading && pokemons.results && pokemonsList}
            </PokemonsArea>
          </HomeContainer>
      </>
    )
}
