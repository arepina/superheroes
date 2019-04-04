import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import heroesList from '../data/heroesList';

class HeroesList extends Component{
  constructor(props) {
        super(props);
        this.state = {heroes: [], clicksNumber: []};
        this.addHero = this.addHero.bind(this);
  }

  addHero(item){
      if(this.state.heroes.indexOf(item) === -1){
        this.state.heroes = [item].concat(this.state.heroes);
        this.state.clicksNumber = [1].concat(this.state.clicksNumber);
      }else{
        var heroIndex = this.state.heroes.indexOf(item);
        this.state.clicksNumber[heroIndex] = this.state.clicksNumber[heroIndex] + 1;
      }
      this.props.onUpdate(this.state.heroes, this.state.clicksNumber)
   }

  render(){
    const styles = theme => ({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
      },
      gridList: {
        height: 350,
      }
    });
    return (
      <div className={this.props.root} style={{width:'100vw',marginLeft:'15px',marginRight:'15px',marginTop:'70px'}}>
        <GridList className={this.props.gridList} cols={4} cellHeight={200}>
          {heroesList.map(hero => (
            <GridListTile key={hero.image} style={{maxWidth: '100px'}} value={hero} onClick={this.addHero.bind(this, hero)}>
              <img style={{height: '100%', width: 'auto',display:'block', borderRadius: '30px'}}
              src={hero.image} alt={hero.name} />
              <GridListTileBar
                title={hero.title}
                subtitle={<span style={{whiteSpace: 'normal', wordBreak: 'break-all'}}>{hero.name}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default HeroesList;
