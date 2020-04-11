import React from 'react';
import {
    handleMovieSearch,
    handleAddToMovies
} from '../actions/index';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        }
    }
    addToMovies = (movie) => {
        this.props.dispatch(handleAddToMovies(movie));
    }
    handleSearch = ()=>{
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleInputChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    }
    render() {
        const {result, showSearchResult} = this.props.search;
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleInputChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>
                        Search
                    </button>
                    {showSearchResult && 
                        <div className="search-results">
                            <div className="left">
                                <img src={result.Poster}  alt="movie-poster"/>
                            </div>
                            <div className="right">
                                <div className="title">
                                    <h2>{result.Title}</h2>
                                </div>
                                <div>
                                    <div className="rating">
                                        {result.imdbRating}
                                    </div>
                                    <div>
                                        <button className="favourite-btn" onClick={()=>this.addToMovies(result)}>Add To Movies</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>            
            </div>
        )
    }
}

export default Navbar;
