import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SelectedHeroes from './SelectedHeroes';
import SearchLine from './SearchLine';
import Heroes from './Heroes';
import GalaxyButtons from './GalaxyButtons';
import * as serviceWorker from './serviceWorker';

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
          <SelectedHeroes heroes={this.state.heroes} clicksNumber={this.state.clicksNumber}/>
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
