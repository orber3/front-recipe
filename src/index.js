import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'bootstrap'
import './bootstrap.min.css'
import App from './App';
import './index.css';
import './queries.css'
import {Provider} from 'react-redux'
import store from './store'



ReactDOM.render(
    <Provider store = {store} >
    <App /> 
    </Provider> ,
  document.getElementById('root')
);
