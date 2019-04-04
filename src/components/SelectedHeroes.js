import React, {Component} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

class SelectedHeroesList extends Component{
  constructor(props){
    super(props)
    this.removeHero = this.removeHero.bind(this);
  }

  removeHero(hero){
      var heroIndex = this.props.heroes.indexOf(hero);
      this.props.heroes.splice(heroIndex, 1);
      this.props.clicksNumber.splice(heroIndex, 1);
      this.props.onUpdate(this.props.heroes, this.props.clicksNumber)
  }

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
            <GridListTile key={hero.image} style={{maxWidth: '100px', width: '100%'}}>
              <img style={{height: '100%',
              width: 'auto',
              display:'block',
              borderRadius: '30px'
            }}
            src={hero.image} alt={hero.name} />
              <GridListTileBar subtitle={<span style={{
                background: 'green',
                fontSize: '20px',
                borderRadius: '0.8em',
                display: 'inline-block',
                fontWeight: 'bold',
                lineHeight: '1.6em',
                marginRight: '5px',
                textAlign: 'center',
                width: '1.6em'
              }}>
                {this.props.clicksNumber[this.props.heroes.indexOf(hero)]}</span>}
              actionIcon={
                 <IconButton style={{color: 'white',
                 width: '30px',
                 height: '30px',
                 marginBottom: '240px',
                 background: 'black',
                 border: 'white',
                 borderStyle: 'solid',
                 borderWidth: '2px'}}
                 value={hero}
                 onClick={this.removeHero.bind(this, hero)}>
                   <ClearIcon style={{marginTop: '-10px'}}/>
                 </IconButton>
               }
               style={{background:'transparent'}}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default SelectedHeroesList;
