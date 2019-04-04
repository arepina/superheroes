import React, { Component } from 'react';
import '../css/SearchLine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

class SearchLine extends Component {
  constructor(props){
    super(props)
    this.filterHeroes = this.filterHeroes.bind(this);
  }

  filterHeroes(){
    this.props.onFilter(document.getElementById('search').value)
  }

  render () {
    return (
      <div id="searchContainer">
         <FontAwesomeIcon icon={faSearch} style={{position: 'absolute',
           marginLeft: '100px',
           marginTop: '20px',
           zindex: '1',
           color: '#ffffff'
         }}/>
         <input type="search" id="search" placeholder="Имя героя" onChange={this.filterHeroes.bind(this)}/>
      </div>
    );
  }
}

export default SearchLine;
