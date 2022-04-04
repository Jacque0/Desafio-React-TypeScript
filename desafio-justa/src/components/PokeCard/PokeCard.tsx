import { CardContainer, TypeContainer } from "./styledPokeCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/BASE_URL"
import { Link } from "react-router-dom"
import usePokemonType from "../../hooks/usePokemonType"
import pikachusillouette from '../../assets/pikachusillouette.png'
import { typeDetails } from "../../constants/typeDetails"
import { PokemonDetails } from "../../constants/Types"

export default function PokeCard(props:{pokemonName: string}) {

  const capitalizeFirst = (str: string) => { 
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const pokemonName = props.pokemonName
  const pokemonData = useRequestData(`${BASE_URL}${pokemonName}`)[0] as PokemonDetails

  let photoPokemon: string
    if (pokemonData.sprites && pokemonData.sprites.other.home.front_default){
        photoPokemon = pokemonData.sprites.other.home.front_default
    } else if (pokemonData.sprites && pokemonData.sprites.front_default){
        photoPokemon = pokemonData.sprites.front_default
    } else if (pokemonData.sprites && pokemonData.sprites.front_shiny){
        photoPokemon = pokemonData.sprites.front_shiny
    } else {photoPokemon = pikachusillouette}

  const pokemonType = pokemonData && pokemonData.types;
  const indice = pokemonData?.id


  const type = usePokemonType(pokemonType ? pokemonType[0].type.name : "")
  let type2
  if (pokemonType && pokemonType.length > 1)
    type2 = typeDetails
      .filter((type) => {
        return pokemonType[1].type.name === type.type
      })
      .map((type) => {
        return type
      })


  return (
    <Link to={`/details/${pokemonName}`}>
    <CardContainer bgColor={type.color as string}>
      <img src={photoPokemon} alt="pokemon" />
      <p>{indice}. {capitalizeFirst(pokemonName)}</p>
      <TypeContainer>
      <p className="type">{type.text}</p>
      {type2 ? <p className="type">{type2[0].text}</p> : <></>}
      </TypeContainer>
    </CardContainer>
    </Link>
  )
}