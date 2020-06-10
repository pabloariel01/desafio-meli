import React, { Component } from 'react';
import SearchBar from "components/search-bar/search-bar"
import "./header.scss"
class Header extends Component {
  state = {};

  render(){
      return (
          <div className="nav-header">
              <SearchBar/>
          </div>
      )
  }
}

export default Header;
