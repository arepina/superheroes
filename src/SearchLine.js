import React, { Component } from 'react';
import './SearchLine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

class SearchLine extends Component {

  render () {
    return (
      <div class="searchContainer">
         <FontAwesomeIcon icon={faSearch} style={{position: 'absolute',
           marginLeft: '100px',
           marginTop: '17px',
           zindex: '1',
           color: '#ffffff',
           top: '50%'
         }}/>
         <input type="search" id="search" placeholder="Имя героя"/>
      </div>
    );
  }
}

export default SearchLine;
