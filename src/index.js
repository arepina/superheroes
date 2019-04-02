import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectedHeroes from './SelectedHeroes';
import SearchLine from './SearchLine';
import Heroes from './Heroes';
import GalaxyButtons from './GalaxyButtons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SelectedHeroes />, document.getElementById('selectedHeroes'));
ReactDOM.render(<SearchLine />, document.getElementById('searchLine'));
ReactDOM.render(<Heroes />, document.getElementById('heroes'));
ReactDOM.render(<GalaxyButtons />, document.getElementById('galaxy'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
