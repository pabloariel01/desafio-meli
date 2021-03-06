import React, { useState, useEffect } from 'react';
import { useLocation ,useHistory } from 'react-router-dom';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import ListItem from 'components/list-item/list-item';
import { Helmet } from 'react-helmet-async';
import Spinner from 'components/spinner/spinner'

const searchResult = Object.freeze({
  author: {
    name: 'Pablo',
    lastName: 'Silva',
  },
  categories: [],
  items: [],
});
const InitialsearchQuery = Object.freeze({
  search:''
});

const initialLiader =Object.freeze({
  isloading:false,
})

const SearchResults = () => {
  const searchEndpoint = process.env.REACT_APP_Backend_Url + 'items';
  const location = useLocation();
  const history = useHistory();
  
  const [searchData, updateSearchData] = useState(searchResult);
  const [searchQuery, updateSearchQuery] = useState(InitialsearchQuery);
  const [loader, updateLoader] = useState(initialLiader);
  

  useEffect(() => {
    let searchQuery = location.search;
    searchQuery = encodeURI(searchQuery).replace('search=', 'q=');
    updateSearchQuery({search: (searchQuery).replace('search=', '')})
    updateLoader({isloading:true})
    fetch(searchEndpoint + searchQuery)
      .then((data) => data.json())
      .then((data) => {
        updateSearchData({ ...data });
      }).finally(()=>{
        updateLoader({isloading:false})
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

  const showSpinner = loader.isloading ? <Spinner />:  null

  const pageDescription =`encntra mas ${searchQuery}`
  return (
    <div>
      <Helmet>
        <title>Meli - Busqueda</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      {showSpinner}
      <Breadcrumb categories={searchData.categories}></Breadcrumb>
      <div className="content-body">
      {items}
      </div>
    </div>
  );
};

export default SearchResults;
