import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './Reducers';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { showAllMovies } from './Actions/actions';

const store = createStore(allReducers, applyMiddleware(thunk));
const mapStateToProps = (state) => {
  return  {...state};
};
const mapDispatchToProps = (dispatch) => {
  return {
    showAllMovies: () => dispatch(showAllMovies())
  }
};
const  ManageCinema= connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ManageCinema/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
