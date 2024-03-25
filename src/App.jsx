import { useState } from 'react'
import Cronometro from './components/Cronometro.jsx'
import CronometroRegressor from './components/CronometroRegressor.jsx'
import './css/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
       <Cronometro />
    </div>
  )
}
