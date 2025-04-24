import { useState, useEffect } from 'react'

const getRandomId = () => Math.floor(Math.random() * 151) + 1

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="bg-white rounded-2xl w-80 shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
      <div className="w-40 h-40 mx-auto mb-4 drop-shadow-lg transition-opacity duration-300">
        <img
          src={pokemonData.imgUrl}
          alt={pokemonData.name}
          className="object-cover w-full h-full"
        />
      </div>
      {/* <h2 className="text-xl font-bold capitalize text-gray-800">
        {pokemonData.name}
      </h2> */}
    </div>
  )
}

const PokeCard = ({ index, onNameUpdate, refresh }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchRandomPokemon = async () => {
    setIsLoading(true)
    const id = getRandomId()
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      const name = data.name
      const imgUrl = data.sprites?.other?.['official-artwork']?.front_default
      if (!name || !imgUrl) {
        setError('Unable to fetch Pokémon data')
      } else {
        setPokemonData({ name, imgUrl })
        onNameUpdate(index, name)
      }
    } catch (error) {
      setError('An error occurred while fetching Pokémon data')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomPokemon()
  }, [refresh])

  if (error) {
    return (
      <div className="text-gray-600 text-lg animate-pulse m-6">{error}</div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isLoading ? (
        <div className="bg-white rounded-2xl w-80 shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
          <div className="w-40 h-40 mx-auto mb-4 transition-opacity duration-300">
            <img
              src="/UserInformation/Assets/tt039ohVD2.gif"
              alt="loading..."
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ) : (
        <PokemonCard pokemonData={pokemonData} />
      )}
      {/* ... */}
    </div>
  )
}

export default PokeCard
{
  /* <button
        onClick={fetchRandomPokemon}
        className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow transition-all duration-300"
      >
        Show Another Pokémon
      </button> */
}
