import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import dataBase from './db/db.json'

const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {

  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomItem(dataBase))
  const [bgImage, setbgImage] = useState(getRandomItem(images))

  const handleNewQuote = () => {
    setQuote(getRandomItem(dataBase))
    setbgImage(getRandomItem(images))
  }

  return (
    <div className={`App ${bgImage}`}>

      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />


      
    </div>
  )
}

export default App
