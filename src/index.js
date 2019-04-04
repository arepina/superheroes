import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import SelectedHeroes from './components/SelectedHeroes';
import SearchLine from './components/SearchLine';
import Heroes from './components/Heroes';
import GalaxyButtons from './components/GalaxyButtons';
import * as serviceWorker from './components/serviceWorker';
import heroesList from './data/heroesList';

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { heroes: [], clicksNumber: [], heroesToFilter: heroesList, mainHeroes: heroesList}
  }

  render () {
    return (
      <div>
        <center>
        <div style={{display: 'inline-block'}}>
          <SelectedHeroes heroes={this.state.heroes}
                          clicksNumber={this.state.clicksNumber}
                          onUpdate={this.onUpdate.bind(this)}/>
          <SearchLine onFilter={this.onFilter.bind(this)}
                      style={{
                        width:'100vw',
                        marginBottom:'10px'
                      }}/>
          <Heroes onUpdate={this.onUpdate.bind(this)}
                  heroes={this.state.heroesToFilter}/>
          <GalaxyButtons/>
        </div>
      </center>
      </div>
    )
  }
  onUpdate (heroes, clicksNumber) {
    this.setState({
      heroes: heroes,
      clicksNumber: clicksNumber
    });
  }

  onFilter (nameFilter){
    this.setState({
      heroesToFilter: this.state.mainHeroes.filter(function(hero) {
                                                      return hero.name.toLowerCase().includes(nameFilter.toLowerCase())
                                                  })
    });
    console.log(this.state.heroesToFilter)
    console.log(nameFilter);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));

serviceWorker.unregister();
