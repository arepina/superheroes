import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class HeroesList extends Component{
  constructor(props) {
        super(props);
        this.state = {heroes: [], clicksNumber: []};
        this.addHero = this.addHero.bind(this);
  }

  addHero(item){
      if(this.state.heroes.indexOf(item) === -1){
        // eslint-disable-next-line
        this.state.heroes = [item].concat(this.state.heroes);
        // eslint-disable-next-line
        this.state.clicksNumber = [1].concat(this.state.clicksNumber);
      }else{
        var heroIndex = this.state.heroes.indexOf(item);
        // eslint-disable-next-line
        this.state.clicksNumber[heroIndex] = this.state.clicksNumber[heroIndex] + 1;
      }
      this.props.onUpdate(this.state.heroes, this.state.clicksNumber)
   }

   render(){
    return (
      <div className={this.props.root} style={{width:'100vw',marginLeft:'15px',marginRight:'15px',marginTop:'70px'}}>
        <GridList className={this.props.gridList} cols={4} cellHeight={200}>
          {this.props.heroes.map(hero => (
            <GridListTile key={hero.image} style={{maxWidth: '100px'}}
                          value={hero} onClick={this.addHero.bind(this, hero)}>
              <img style={{height: '100%',
                          width: 'auto',
                          display:'block',
                          borderRadius: '30px'}}
              src={hero.image} alt={hero.name} />
              <GridListTileBar
                title={hero.title}
                subtitle={
                  <span style={{
                  whiteSpace: 'normal',
                  wordBreak: 'break-all'}}>
                  {hero.name}
                  </span>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default HeroesList;
