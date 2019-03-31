import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { addHero } from './actions/heroes';
import { filterHeroes, title, galaxy } from './actions/filters';
import getVisibleHeroes from './selectors/heroes';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(template, document.getElementById('app'));

serviceWorker.unregister();

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
