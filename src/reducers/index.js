import {
    ADD_MOVIES,
    ADD_MOVIE, 
    ADD_FAVOURITE, 
    REMOVE_FAVOURITE, 
    SHOW_FAVOURITES,
    ADD_SEARCH_RESULT
} from '../actions/index'
import {combineReducers} from 'redux';
const defaultData = {
    data: [],
    favourites: [],
    showFavourites: false
}
export function movies(state = defaultData, action) {
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                data: action.movies
            };
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            };
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(item=>item.Title !== action.movie.Title)
            }
        case SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE:
            return {
                ...state,
                data: [action.movie, ...state.data]
            }
        default:
            return state
    }
}

const initialSearchState = {
    showSearchResult: false,
    result : {}
}

export function search(state=initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResult: true
            }
        case ADD_MOVIE:
            return {
                ...state,
                showSearchResult: false
            }
        default:
            return state;
    }
}

export default combineReducers({
    movies,
    search
});
