import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from 'components/breadcrumb/breadcrumb';


const searchResult = Object.freeze({
    search: ""
  });
  
const SearchResults = () => {
  const searchEndpoint = process.env.REACT_APP_Backend_Url + 'items';
  const location = useLocation();

  const [searchData, updateSearchData] = useState(searchResult);

  useEffect(() => {
    let searchQuery = location.search;
    searchQuery = encodeURI(searchQuery).replace('search=', 'q=');
    fetch(searchEndpoint + searchQuery)
      .then((data) => data.json())
      .then((data) => {
          console.log(data)
        updateSearchData({...data})
        });

    console.log(searchQuery);
  }, [location]);

  return (
  <div>
      <Breadcrumb categories={searchData.categories}></Breadcrumb>
      test router
      </div>
  );
};

export default SearchResults;
