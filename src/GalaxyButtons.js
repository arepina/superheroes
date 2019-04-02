import React, { Component } from 'react';

class GalaxyButtons extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        isDC: true,
        isMarvel: false
    }
  }

  handleClick (event) {
      event.preventDefault();
      this.setState({
          isDC: this.state.isMarvel,
          isMarvel: this.state.isDC
      });
  }

  render () {
    const style = {
      width: '200px',
      height: '150px'
    };
    return (
      <center>
        <div if="galaxy">
          <button disabled={this.state.isDC}><img border="0" id="dc" src="dc.png" alt="dc" onClick={this.handleClick} style={style}/></button>
          <button disabled={this.state.isMarvel}><img border="0" id="marvel" src="marvel.png" alt="marvel" onClick={this.handleClick} style={style}/></button>
        </div>
      </center>
    );
  }
}

export default GalaxyButtons;
