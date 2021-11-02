import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../src/global.css'

// import Badge from './components/Badge';
// import BadgeNew from './pages/BadgeNew';
// import Badges from './pages/Badges';
// import BadgeListPokemons from './components/BadgesListPokemons';


import App from './components/App';


const container = document.getElementById('app');

// const element = <h1>Hello, Platzi Badges...</h1>;
ReactDOM.render(<App
    />, container);
