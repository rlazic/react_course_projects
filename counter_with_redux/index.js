import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import myReducers from './reducers'


//Create the store
const myStore = createStore(myReducers);

//Console log the current state everytime the state changes
myStore.subscribe(()=>console.log(myStore.getState()));

ReactDOM.render(<Provider store={myStore}><App/></Provider>, document.getElementById('root'));
