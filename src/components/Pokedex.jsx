import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './Pokedex/PokemonCard'
import HeaderPoke from './shared/HeaderPoke'
import { useSelector } from 'react-redux'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'
import './styles/pokedex.css'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  useEffect(() => {
    
    if(optionType !== 'All'){ 

      //AQUÍ SE HACE LA LÓGICA PARA CUANDO EL USUARIO QUIERE 
      //FILTRAR POR TIPO
        
     const URL = `https://pokeapi.co/api/v2/type/${optionType}/` 
     axios.get(URL)
     .then(res => {
      const arr = res.data.pokemon.map(e => e.pokemon)
      setPokemons({results: arr})
     })
       .catch(err => console.log(err))

    } else if (pokeSearch){

      //AQUI SE HACE LA LÓGICA CUANDO EL USUARIO BUSCA POR EL INPUT
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`

      const obj = {
        results: [{url}]
      }
      setPokemons(obj)

    }  else {

      //AQÍ SE HACE LA LÓGICA CUANDO EL USUARIO QUIERE TODOS LOS POKEMONS
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
    } 
    
  }, [optionType, pokeSearch ])

    const nameTrainer =  useSelector(state => state.nameTrainer)

  return (
    <div>
      <HeaderPoke /> 
      <h2 className='title__header'>Welcome {nameTrainer}, Catch them all:</h2><br /><br />
      <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType} /><br />
      <SelectType 
      optionType={optionType}
      setOptionType={setOptionType}
      setPokeSearch={setPokeSearch}
       /> <br /><br />
      <div className='cards-container'>
        {
          pokemons?.results.map(pokemon => (

            <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Pokedex