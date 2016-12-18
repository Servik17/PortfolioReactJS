import React from 'react';
import ReactDOM from 'react-dom';
import Spotify from './spotify/Spotify';
import Albums from './spotify/Albums';
import Portfolio from './Portfolio';
import Clock from './clock/Clock';
import { Router, Route, browserHistory } from 'react-router';

//Рендер компонентов и роутинг
ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={ Portfolio }>           
            <Route path="/clock" component={ Clock }></Route>
            <Route path="/spotify" component={ Spotify }></Route>
            <Route path="/spotify/:id/albums" component={ Albums }></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
