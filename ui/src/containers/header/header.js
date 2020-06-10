import React, { Component } from 'react';
import SearchBar from "components/search-bar/search-bar"
import "./header.scss"
import { Helmet } from 'react-helmet-async';

class Header extends Component {
  state = {};

  render(){
      return (
          <div className="nav-header">
            <Helmet>
                <title>Meli</title>
                <meta name="description" content="Venta de productos Online" />
            </Helmet>
            <SearchBar/>
          </div>
      )
  }
}

export default Header;
