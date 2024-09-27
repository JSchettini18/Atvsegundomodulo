import { useState } from 'react'
import './App.css'
import Garage from './components/Garage'
import Zoo from './components/Zoo'
import FruitBasket from './components/FruitBasket'
import FormularioCadastro from './components/FormularioCadastro'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Garage />
      <Zoo />
      <FruitBasket />
      <FormularioCadastro />

    </>
  )
}

export default App
