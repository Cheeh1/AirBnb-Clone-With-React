import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './cardData'
import './App.css'

function App() {

const cardElements = cardData.map(card => {
  return (
    < Card 
    key = {card.id}
    card = {card}
  />
   )
})

  return (
    <div className="container">
       < NavBar />
       < Hero />
       <div className="card-props">
         {cardElements}
      </div>
    </div>
  )
}

export default App
