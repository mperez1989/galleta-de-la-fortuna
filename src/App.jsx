
import { useState } from 'react'
import './App.css'
import phrases from "./utils/phrases.json"
import Quote from './components/Quote'
import BtnQuote from './components/BtnQuote'
import getRandomeElement from './utils/getRandomEle'

function App() {

  const phraseRandom = getRandomeElement(phrases)
  const [quote, setQuote] = useState(phraseRandom)

  const [numberBg, setNumberBg] = useState(1)

  const bgStyle = {
    backgroundImage: `url(/images/fondo${numberBg}.jpg)`

  }


  return (
    <div className='container' style={bgStyle}>
      <h1 className='container__title'>Galleta de la fortuna</h1>
      <Quote
        phrase={quote}
      />
      <BtnQuote
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
      />
    </div>
  )
}

export default App
