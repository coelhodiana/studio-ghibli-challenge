import React, {useEffect, useState} from 'react';
import './Card.css'

const Card = () => {
  const [filme, setFilme] = useState([]);

useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(data => setFilme(data))
        .catch(err => console.error(err))
}, [])

  return ( 
          <div className="container">
            {filme.map(({title, description }) => (
                <div key={filme.id} className="card">
                    <h1 className="movie-title">{title}</h1>
                    <p className="description">{description}</p>
                </div>
            ))}
           </div>
   );
}
 
export default Card;
