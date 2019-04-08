import React, { Component } from 'react';
import '../css/GalaxyButtons.css';

class GalaxyButtons extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        isDC: false,
        isMarvel: true
    }
  }

  handleClick (event) {
      document.getElementById("search").value = '';
      this.setState({
          isDC: this.state.isMarvel,
          isMarvel: this.state.isDC
      });
      this.props.onGalaxyFilter(this.state.isMarvel)
  }

  render () {
    const style = {
      width: '200px',
      height: '150px'
    };
    return (
      <center>
        <div if="galaxy" style={{display: 'inline-block',width:'100vw',marginTop:'10px'}}>
            <input type="image" disabled={this.state.isDC} border="0" id="dc" src="dc.png" alt="dc" onClick={this.handleClick} style={style}/>

            <input type="image" disabled={this.state.isMarvel} border="0" id="marvel" src="marvel.png" alt="marvel" onClick={this.handleClick} style={style}/>

        </div>
      </center>
    );
  }
}

export default GalaxyButtons;
