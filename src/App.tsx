// import { useState } from 'react'
import Gmail from './components/Gmail'
import Outlook from './components/Outlook'
import Watchlist from './components/Watchlist'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='max-w-4xl mx-auto flex flex-col space-y-8'>
      <Watchlist />
      <Outlook />
      <Gmail />
    </div>
  )
}

export default App
