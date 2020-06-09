import React from 'react';
import './search-bar.scss';
import logo from 'assets/images/Logo_ML.png';
import searchImg from 'assets/images/ic_Search.png';
import { searchPlaceholder } from 'constants/constants';
import { useHistory } from 'react-router-dom';


const searchValue = Object.freeze({
  search: ""
});

const SearchBar = (props) => {
  const [searchData, updateSearchData] = React.useState(searchValue);
  const history = useHistory();

  const handleChange= (e)=>{
    updateSearchData({
      ...searchData,
      search: e.target.value.trim()

    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    history.push({pathname:'/items',search: `?search=${searchData.search}`})
    
  }
  return (
    <div className="container">
      <div className="content">
        <div className="searchBar ">
          <img src={logo} alt="logo" />
          <form role="search" onSubmit={handleSubmit} className="searchForm">
            <input
              placeholder={searchPlaceholder}
              onChange={handleChange}
              value={searchData.search}
              tabIndex="1"
            />
            <button type="submit" className="searchButton" tabIndex="2">
              <img src={searchImg} alt="search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
