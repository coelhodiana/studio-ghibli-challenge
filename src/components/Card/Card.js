import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    state = { filmes: [] }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then((data) => {
          this.setState({ filmes: data })
          console.log(this.state.filmes)
        })
        .catch(console.log)
      }


      render() {

        return (
           <div className="container">
            {this.state.filmes.map((filmes) => (
                <div key={filmes.id} className="card">
                    <h1 className="movie-title">{filmes.title}</h1>
                    <p className="description">{filmes.description}</p>
                </div>
            ))}
           </div>
        );
      }
    }
 
export default Card;