import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import SelectedHeroes from './components/SelectedHeroes';
import SearchLine from './components/SearchLine';
import Heroes from './components/Heroes';
import GalaxyButtons from './components/GalaxyButtons';
import * as serviceWorker from './components/serviceWorker';

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { heroes: [], clicksNumber: []}
  }
  render () {
    return (
      <div>
        <center>
        <div style={{display: 'inline-block'}}>
          <SelectedHeroes
          heroes={this.state.heroes}
          clicksNumber={this.state.clicksNumber}
          onUpdate={this.onUpdate.bind(this)}/>
          <SearchLine style={{width:'100vw',marginBottom:'10px'}}/>
          <Heroes onUpdate={this.onUpdate.bind(this)}/>
          <GalaxyButtons/>
        </div>
      </center>
      </div>
    )
  }
  onUpdate (heroes, clicksNumber) {
    console.log(clicksNumber);
    this.setState({
      heroes: heroes,
      clicksNumber: clicksNumber
    });
    console.log(this.state.heroes);
    console.log(this.state.clicksNumber);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));

serviceWorker.unregister();
