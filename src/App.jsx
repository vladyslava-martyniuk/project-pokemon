import { useState } from 'react'
import './App.css'
import { AddPokemonForm } from './components/AddPokemon/AddPokemon.jsx'
import { PokemonList } from './components/PokemonList/PokemonList.jsx'
import { Pokemon } from './components/Pokemon/Pokemon.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <AddPokemonForm/> 
    <PokemonList/>
    </>
  )
}

export default App