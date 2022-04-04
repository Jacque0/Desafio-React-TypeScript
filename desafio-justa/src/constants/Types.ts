export type ObjectPokemon = {
    name: string,
    url: string
}

export type ObjectData = {
    count: number,
    next: string,
    previous: any,
    results: ObjectPokemon[]
}

export type PokemonDetails = {
   abilities: any[],
   base_experience: number,
   forms: any[],
   game_indices: any[],
   height: number,
   id: number,
   is_default: boolean,
   location_area_encounters: string,
   moves: any[],
   name: string,
   order: number,
   past_types: any[],
   species: any,
   sprites: any,
   stats: any[],
   types: any[],
   weight: number 
}