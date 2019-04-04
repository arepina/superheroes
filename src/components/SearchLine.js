import React, { Component } from 'react';
import '../css/SearchLine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

class SearchLine extends Component {

  filterHeroes(){
    console.log("Hello")
  }

  render () {
    return (
      <div id="searchContainer">
         <FontAwesomeIcon icon={faSearch} style={{position: 'absolute',
           marginLeft: '100px',
           marginTop: '17px',
           zindex: '1',
           color: '#ffffff',
           top: '50%'
         }}/>
         <input type="search" id="search" placeholder="Имя героя" onChange={this.filterHeroes}/>
      </div>
    );
  }
}

export default SearchLine;
