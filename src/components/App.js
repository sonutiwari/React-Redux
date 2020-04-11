import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import {addMovies, setShowFavourite} from '../actions/index';
class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }

  isFavourite = movie=>{
    const {movies} = this.props.store.getState();
    const {favourites} = movies;
    return favourites.indexOf(movie) !== -1;
  }
  changeTab(val){
    this.props.store.dispatch(setShowFavourite(val))
  }
  render(){
    const {movies, search} = this.props.store.getState();
    const {data, favourites, showFavourites } = movies;
    const renderData = showFavourites ? favourites : data;
    return (
      <div className="App">
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() => this.changeTab(false)}>
              Movies
            </div>
            <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.changeTab(true)}>
              Favorites
            </div>
          </div>

          <div className="list">
            {renderData &&
              renderData.map((movie, index)=>
                (
                  <MovieCard 
                    movie={movie} 
                    key={index} 
                    dispatch={this.props.store.dispatch}
                    isFavourite = {this.isFavourite(movie)}
                  />
                )
              )
            }
          </div>
          {renderData && renderData.length === 0 ? <div className="no-movies">No Movies to show for this criteria</div>: null}
        </div>
      </div>
    );
  }
}

export default App;
