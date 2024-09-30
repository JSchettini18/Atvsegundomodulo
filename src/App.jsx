import { useState } from 'react'
import './App.css'
import Garage from './components/Garage'
import Zoo from './components/Zoo'
import FruitBasket from './components/FruitBasket'
import FormularioCadastro from './components/FormularioCadastro'
import MyForm from './components/MyForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Garage />
      <Zoo />
      <FruitBasket />
      <MyForm />
      <FormularioCadastro />
      

    </>
  )
}

export default App
