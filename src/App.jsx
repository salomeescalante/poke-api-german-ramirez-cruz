import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Routes>


        {/* ruta no protegida */}
        <Route path='/' element={<Home />} /> 


        {/* rutas protegidas */}
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokemonDetails />} />
        </Route>


      </Routes>

    </div>
  )
}

export default App