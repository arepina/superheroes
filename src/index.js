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
    this.state = { heroes: [] }
  }
  render () {
    return (
      <div>
        <center>
        <div style={{display: 'inline-block'}}>
          <SelectedHeroes heroes={this.state.heroes}/>
          <SearchLine style={{width:'100vw',marginBottom:'10px'}}/>
          <Heroes onUpdate={this.onUpdate.bind(this)}/>
          <GalaxyButtons/>
        </div>
      </center>
      </div>
    )
  }
  onUpdate (heroes) {this.setState({heroes}); console.log(this.state.heroes);}
}

ReactDOM.render(<Main />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
