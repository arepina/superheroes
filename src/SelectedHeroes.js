import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

class SelectedHeroesList extends Component{
  render(){
    return (
      <div style={{display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      maxWidth: '100vw',
      marginTop: '10px'}}>
        <GridList cols={2.5} style={{ flexWrap: 'nowrap', transform: 'translateZ(0)'}}>
          {this.props.heroes.map(hero => (
            <GridListTile key={hero.image} style={{maxWidth: '100px'}}>
              <img style={{height: '100%', width: 'auto',display:'block'}}
              src={hero.image} alt={hero.name} />
              <GridListTileBar
                subtitle={<span>{this.props.clicksNumber[this.props.heroes.indexOf(hero)]}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default SelectedHeroesList;
