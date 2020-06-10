import React, { useState, useEffect } from 'react';
import { useLocation ,useHistory } from 'react-router-dom';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import ListItem from 'components/list-item/list-item';
import {useHandleError} from 'utils/utils'

const searchResult = Object.freeze({
  author: {
    name: 'Pablo',
    lastName: 'Silva',
  },
  categories: [],
  items: [],
});

const SearchResults = () => {
  const searchEndpoint = process.env.REACT_APP_Backend_Url + 'items';
  const location = useLocation();
  const history = useHistory();

  const [searchData, updateSearchData] = useState(searchResult);
  

  useEffect(() => {
    let searchQuery = location.search;
    searchQuery = encodeURI(searchQuery).replace('search=', 'q=');
    fetch(searchEndpoint + searchQuery)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        updateSearchData({ ...data });
      });
  }, [searchEndpoint, location]);

  const navigateItem =(itemId) => {
   history.push(`/items/${itemId}`);
  };

  let items = null;
  if (searchData.items.length > 0) {
    items = searchData.items.map((itemData, i) => {
      return <ListItem key={i} details={itemData} onClick={navigateItem.bind(this)}/>;
    });
  }
  return (
    <div>
      <Breadcrumb categories={searchData.categories}></Breadcrumb>
      <div className="content-body">
      {items}
      </div>
    </div>
  );
};

export default SearchResults;
