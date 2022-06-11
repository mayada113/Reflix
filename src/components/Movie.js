import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/movie.css'

class Movie extends Component {

    addOrRemove = () => {
        this.props.addOrRemove(this.props.movie.id)
    }

    render() {
        return (
            <div>
                <Link to={`/movies/${this.props.movie.id}`}>
                    <img src={this.props.movie.img} alt={this.props.movie.title} height='230px' width='170px' />
                </Link>
                <div onClick={this.addOrRemove}>{this.props.movie.isRented ? <i class="fas fa-minus-circle" id="remove"></i> : <i class="fas fa-plus-circle" id="add"></i>}</div>
            </div>
        );
    }
}

export default Movie;