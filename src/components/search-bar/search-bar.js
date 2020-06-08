import React from 'react';
import './search-bar.scss';
import logo from 'assets/images/Logo_ML.png';
import searchImg from 'assets/images/ic_Search.png'
import {searchPlaceholder} from 'constants/constants'


const SearchBar = (props) => {
  const { name } = props;
  return (
    <div className="searchBar container">
      <img src={logo} alt="logo" />
      <form role="search" className="searchForm">
        <input onChange={props.changed} value={name}  placeholder={searchPlaceholder}/>
        <button type="submit" className="searchButton">
            <img src={searchImg} alt="search"/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
