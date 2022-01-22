import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider as AP } from './store/auth-context';
import './index.css';
import App from './App';

ReactDOM.render(
    <AP>
        <App />
    </AP>,
    document.getElementById('root')
);
