import getRandomeElement from "../utils/getRandomEle"

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {

    const handleChange = () => {
        
        setQuote(getRandomeElement(phrases))
        setNumberBg(getRandomeElement([1,2,3,4]))

    }
  return (
    
    <div>
        <button className="container__btn" onClick={handleChange}>Phrases</button>
    </div>
  )
}

export default BtnQuote