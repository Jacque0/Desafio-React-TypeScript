import React from 'react'
import Header from '../../components/Header/Header'
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import pikachusillouette from "../../assets/pikachusillouette.png"
import usePokemonType from "../../hooks/usePokemonType"
import { typeDetails } from "../../constants/typeDetails"

export default function DetailsPage() {
  const params = useParams()
  const pokemomDetails = useRequestData(`${BASE_URL}${params.name}`)

  const details = pokemomDetails[0] as any

  let pokemonPhoto: string
  if (details.sprites && details.sprites.other.home.front_default) {
    pokemonPhoto = details.sprites.other.home.front_default
  } else if (details.sprites && details.sprites.front_default) {
    pokemonPhoto = details.sprites.front_default
  } else if (details.sprites && details.sprites.front_shiny) {
    pokemonPhoto = details.sprites.front_shiny
  } else pokemonPhoto = pikachusillouette
  
  const types = details?.types
  const type1 = usePokemonType(types ? types[0].type.name : "")
  let type2
  if (types && types.length > 1)
    type2 = typeDetails
      .filter((type) => {
        return types[1].type.name === type.type
      })
      .map((type) => {
        return type
      })

  return (
    <div>
      <Header backButton={true} />
      <h1>{params.name}</h1>
      <img src={pokemonPhoto} />
    </div>
  )
}
