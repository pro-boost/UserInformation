import { useState } from 'react'
import PokeCard from '../Components/PokeCard'

const Home = () => {
  const [pokemonNames, setPokemonNames] = useState(['', '', ''])
  const [shouldRefresh, setShouldRefresh] = useState(false)

  const updatePokemonName = (index, name) => {
    setPokemonNames((prevNames) => {
      const newNames = [...prevNames]
      newNames[index] = name
      return newNames
    })
  }

  const refreshAllPokemon = () => {
    setShouldRefresh((prev) => !prev)
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-100 to-pink-100 gap-5">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Pokémon: {pokemonNames.join(', ')}
      </h1>
      <div className="flex items-center justify-center gap-20">
        <PokeCard
          index={0}
          onNameUpdate={updatePokemonName}
          refresh={shouldRefresh}
        />
        <PokeCard
          index={1}
          onNameUpdate={updatePokemonName}
          refresh={shouldRefresh}
        />
        <PokeCard
          index={2}
          onNameUpdate={updatePokemonName}
          refresh={shouldRefresh}
        />
      </div>
      <button
        onClick={refreshAllPokemon}
        className="mt-10 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow transition duration-300"
      >
        Refresh All Pokémon
      </button>
    </div>
  )
}

export default Home
