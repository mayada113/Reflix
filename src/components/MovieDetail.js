import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/movieDetail.css'


class MovieDetail extends Component {
    
    render() {
        const movie = this.props.catalog.find(m => m.id == this.props.match.params.id)
        return (
            <div className="movieDetail">
                <h3 className="title">{movie.title}</h3>
                <img src={movie.img} alt={movie.title} className='movie-card' height='400px' width='350px' />
                <div className="year">{movie.year}</div>
                <div className="desc">{movie.descrShort}</div>
            </div>
        );
    }
}

export default MovieDetail;