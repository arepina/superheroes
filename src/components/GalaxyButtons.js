import React, { Component } from 'react';
import '../css/GalaxyButtons.css';

class GalaxyButtons extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        isDC: '',
        isMarvel: 'disabled'
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
    return (
      <center>
        <div if="galaxy" style={{display: 'inline-block',width:'100vw',marginTop:'10px'}}>
            <input type="image" class={this.state.isDC} border="0" id="dc"
            src="dc.png" alt="dc" onClick={this.handleClick}/>
            <input type="image" class={this.state.isMarvel} border="0" id="marvel"
            src="marvel.png" alt="marvel" onClick={this.handleClick}/>
        </div>
      </center>
    );
  }
}

export default GalaxyButtons;
