import React from 'react'
import Header from '../../components/Header/Header'
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"
import useRequestData from "../../hooks/useRequestData"
import pikachusillouette from "../../assets/pikachusillouette.png"
import usePokemonType from "../../hooks/usePokemonType"
import { typeDetails } from "../../constants/typeDetails"
import { PokemonDetails } from '../../constants/Types'
import { Loading } from '../../components/Loading/Loading'
import { FooterDetails, PokeContainer } from './styleDetails'

export default function DetailsPage() {
  const params = useParams()
  const pokemomDetails = useRequestData(`${BASE_URL}${params.name}`)

  const details = pokemomDetails[0] as PokemonDetails
  const loading = pokemomDetails[2] as boolean

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
    type2 = typeDetails.filter((type) => {
        return types[1].type.name === type.type
      }).map((type) => {
        return type
  })

  const indice = details?.id
  const stats = details?.stats
  const moves = details?.moves

  const renderMoves = moves?.map((move, i) => {
    return i < 5 && <li key={i}>{move.move.name}</li>
  })

  return (
    <div>
      <Header backButton={true} />
      {loading && <Loading />}
      {!loading && details.id && (<PokeContainer
                                    bgColor1={type1.color}
                                    bgColor2={type2 ? type2[0].color : "white"}>
          <h1>{indice}. {params.name?.toLocaleUpperCase()}</h1>
          <img src={pokemonPhoto} />
          <FooterDetails>
            <p>     
              <section><b>HP:</b> {stats[0].base_stat}</section>
              <section><b>Ataque:</b> {stats[1].base_stat}</section>
              <section><b>Defesa:</b> {stats[2].base_stat}</section>
              <section><b>Velocidade:</b> {stats[5].base_stat}</section>
            </p>
            <ul>
              <b>Principais movimentos:</b>
              {renderMoves}
            </ul>
          </FooterDetails>
        </PokeContainer>)}
      
    </div>
  )
}
