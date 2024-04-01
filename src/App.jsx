import { useState } from 'react'
import Cronometro from './components/Cronometro.jsx'
import Temporizador from './components/Temporizador.jsx'
import './css/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <main className='Cronometro__area'><Cronometro/></main>
      <aside className='Temporizador__area'><Temporizador/></aside>
    </div>
  )
}