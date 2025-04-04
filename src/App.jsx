import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slider from './Components/slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/HeaderOld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header/>
      
      <Slider/>

      <ProductionHouse/>

      <GenreMovieList/>
    </div>
  )
}

export default App
