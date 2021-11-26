import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import {applyMiddleware, createStore} from 'redux';
// import allReducers from './Reducers';
// import { connect, Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import * as Actions from './api/api';

//const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(allReducers, applyMiddleware(thunk));

// const mapStateToProps = (state) => {
//     return {...state};
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       showAllMovies: () => dispatch(Actions.showAllMovies()),
//       addMovie: (new_movie) => dispatch(Actions.addMovie({data: new_movie}))
//     };
// };

// const MovieApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App/>
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);