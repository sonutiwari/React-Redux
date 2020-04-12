import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import combineReducers from './reducers/index';
import thunk from 'redux-thunk';
import AppWrapper from './components/App';
const store = createStore(combineReducers, applyMiddleware(thunk));
export const StoreContext = createContext();
console.log(StoreContext);
ReactDOM.render(
    <StoreContext.Provider value={store}>
        <AppWrapper/>
    </StoreContext.Provider>
, document.getElementById('root'));
