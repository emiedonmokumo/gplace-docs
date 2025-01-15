import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Gmail from './components/Gmail'
import Outlook from './components/Outlook'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gmail />
      <Outlook />
    </>
  )
}

export default App
