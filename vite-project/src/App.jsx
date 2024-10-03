import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import PokemonDisplay from './components/PokemonDisplay/PokemonDisplay';
import InfoDisplay from './components/InfoDisplay/InfoDisplay';

import './App.css'

function App() {
  const [pokemonID, setPokemonID] = useState(1)
  const [pokemonData, setPokemonData] = useState(null)
  const [infoToggle, setInfoToggle] = useState("Info")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(pokemonID)

    const fetchData = async () => {
      // call API
      console.log(pokemonID)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      const data = await response.json()
      console.log(data);

      const attributes = {
        name: data.name,
        imageUrl: data.sprites["front_default"],
        types: data.types.map(item => item["type"]["name"]),
        moves: data.moves.map(item => item["move"]["name"]),
        info: {
          height: data.height,
          weight: data.weight,
          hp: data.stats.find(item => item["stat"]["name"] == "hp")["base_stat"],
          attack: data.stats.find(item => item["stat"]["name"] == "attack")["base_stat"],
          defense: data.stats.find(item => item["stat"]["name"] == "defense")["base_stat"],
          specialAttack: data.stats.find(item => item["stat"]["name"] == "special-attack")["base_stat"],
          specialDefense: data.stats.find(item => item["stat"]["name"] == "special-defense")["base_stat"],
          speed: data.stats.find(item => item["stat"]["name"] == "speed")["base_stat"]
        }
      }

      setPokemonData(attributes)
      setIsLoading(false)
    }

    fetchData();

  }, [pokemonID])

  return (
    <>
      <Header/>
      {!isLoading ?
        <div id="main-container">
          <div class="half-container">
            <PokemonDisplay imageUrl={pokemonData.imageUrl} name={pokemonData.name.replace("-m", "♂").replace("-f", "♀")} types={pokemonData.types}/>
            <Navigation pokemonID={pokemonID} setPokemonID={setPokemonID}/>
          </div>
          <div class="half-container" id="right-container">
            <InfoDisplay infoToggle={infoToggle} info={pokemonData.info} moves={pokemonData.moves}/>
          </div>
        </div>
      : <></>}
    </>
  )
}

export default App
