export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_MOVIE  = 'ADD_MOVIE';
export const ADD_FAVOURITE = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITE  = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES  = "SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    };
} 

export function handleAddToMovies(movie) {
    console.log("Add to movie", movie);
    return {
        type: ADD_MOVIE,
        movie
    };
}

export function addFavourites(movie){
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFavourites(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val){
    return {
        type: SHOW_FAVOURITES,
        val
    }
}

export function handleMovieSearch(query){
    const url = `http://www.omdbapi.com/?apikey=7a284e41&t=${query}`;
    return function(dispatch){
        fetch(url)
        .then(resp=>resp.json())
        .then(movie=>{dispatch(addMovieSearchResult(movie))})
        .catch(err=>console.log("Error", err));
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}
