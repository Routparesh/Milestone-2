
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let[cards, setCards]= useState([]);
  let[inputValue, setInputValue] = useState('')

  let newUpdate = () => {
    if (inputValue.trim() !== '') {
      // Only add a new card if the input value is not empty
      const newCard = { task: inputValue, status: 'pending' };
      setCards([...cards, newCard]);
      setInputValue(''); // Clear the input after adding a new card
    }
  };
  
  return (
    <>
      <nav>
        <div className='nav-div'>
          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button onClick={newUpdate}>Add</button>
        </div>
      </nav>
      
      <div className='container'>
      {cards.map((card, index) => (
          <Card key={index} task={card.task} status={card.status} />
        ))}
      </div>
      
    </>
  )
}

export default App
