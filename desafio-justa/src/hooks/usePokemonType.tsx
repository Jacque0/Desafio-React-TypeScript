import { useState, useEffect } from "react"
import { typeDetails } from "../constants/typeDetails"

const usePokemonType = (pokemonType: string) => {
  const [type, setType] = useState({ text: "", color: "white" })

  useEffect(() => {
    typeDetails.map((type) => {
      if (type.type === pokemonType)
        setType({ text: type.text, color: type.color })
    })}, [pokemonType])

    return type
}

export default usePokemonType