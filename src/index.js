import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import combineReducers from './reducers/index';
import thunk from 'redux-thunk';
const store = createStore(combineReducers, applyMiddleware(thunk));
ReactDOM.render(<App store={store} />, document.getElementById('root'));
