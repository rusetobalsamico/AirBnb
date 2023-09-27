import { useState } from 'react'
import data from './data'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const makeCard = data.map( data => {
    return <Card {...data} key={data.id} />
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {makeCard}
      </section>
    </>
  )
}

export default App
