export interface Pokemon {
  id: string,
  number: string,
  name: string,
  attacks: {
    special: {
      name: string
      type: string
      damage: number
    }
  },
  evolutions: {
      id: string
      number: string,
      name: string
      weight: {
        minimum: string
        maximum: string
      }
      attacks: {
        fast: {
          name: string
          type: string
          damage: number
        }
      }
    }
  }
  
  export interface PokemonQueryResponse {
    pokemon: Pokemon
  }
  