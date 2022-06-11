import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/catalog.css'
import Movie from '../components/Movie';


class Catalog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            catalogCopy: [...this.props.catalog]
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value}, () => {   
                this.setState({catalogCopy: this.props.catalog.filter(
                    m => m.title.toLowerCase().includes(this.state.name.toLowerCase()))})
            })
    }

    addOrRemove = (id) => {
        this.props.addOrRemove(id)
    }

    render() {
        let state = this.state
        return (
            <div>
                <div id="u-input">
                    <input type="text" placeholder="search" name="name" value={state.name} onChange={this.handleChange} />
                    <div id="button">SEARCH</div>
                </div>
                <div id="catalog">
                    <div className="movies">
                        {this.state.catalogCopy.find(m => m.isRented) ?
                            <div id="rented"><h3>Rented</h3>
                                <div className="rented">
                                    {state.catalogCopy.filter(m => m.isRented).map(m => {
                                        return (
                                            <div class="wrapper">
                                                <Movie key={m.id} movie={m} addOrRemove={this.addOrRemove} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            : null}
                        <div id="catalogLabel"><h3 id="label">Catalog</h3>
                            <div className="catalog">
                                {state.catalogCopy.filter(m => m.isRented === false).map(m => {
                                    return (
                                        <div>
                                            <Movie key={m.id} movie={m} addOrRemove={this.addOrRemove}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;