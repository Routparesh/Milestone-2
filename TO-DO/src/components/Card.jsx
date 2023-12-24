import './Card.css';

import App from '../App';
import { useState } from 'react';

function Card({task}){
    let[updateStatus,setStatus] = useState('Pending')

    const changeStatus = ()=>{
        setStatus(
            // updateStatus = `complete`
            (prevStatus) => (prevStatus === 'Complete' ? 'Pending' : 'Complete')
        )  
    }

    const removeCard = (id) => {
        (prevCards) => prevCards.filter((card) => card.id !== id);
      };
    return(
        <div className='card'>
            <h1>{task}</h1>
            <p>Status: {updateStatus}</p>
            <button className='btn' onClick={changeStatus}>Update Status</button>
            <button className='btn' onClick={removeCard}>Remove</button>
        </div>
    )
}

export default Card;