import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ItemDescription from 'components/item-description/item-description';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { Helmet } from 'react-helmet-async';
import Spinner from 'components/spinner/spinner'

const searchResult = Object.freeze({
  author: {
    name: '',
    lastName: '',
  },
  item: {
    id: '',
    title: '',
    price: {
      currency: '',
      ammount: 0,
      decimals: 0,
    },
    picture: '',
    condition: '',
    free_shipping: false,
    description: '',
    sold_quantity: 0,
  },
  categories:[]
});

const initialLiader =Object.freeze({
  isloading:false,
})

const Details = () => {
  const history = useHistory();
  const searchEndpoint = process.env.REACT_APP_Backend_Url + 'items/';
  const location = useLocation();
  
  const [item, updateItem] = useState(searchResult);
  const [loader, updateLoader] = useState(initialLiader);

  const errorHandler = (error) => {
    switch (error) {
      case 404:
        alert('Item could not be found');
        break;
      case 500:
        alert('Ups, Something whent wrong');
        break;
      default:
        alert('Ups, Something whent wrong');
        break;
    }
    history.push('/');
    return null;
  };

  useEffect(() => {
    let searchQuery = location.pathname.split('/').slice(-1)[0];
    searchQuery = encodeURI(searchQuery);
    updateLoader({isloading:true})
    fetch(searchEndpoint + searchQuery)
      .then((data) => {
        if (data.status !== 200) {
          errorHandler(data.status);
        }
        return data.json();
      })
      .then((data) => {
        updateItem({ ...data });
      })
      .catch((error) => {
        errorHandler(error);
      }).finally(()=>{
        updateLoader({isloading:false})
      });
  }, [searchEndpoint, location]);

  const handleBuy = (item) => {
    alert('Buy Product');
  };

  const itemsHolder = item 
        ? (<ItemDescription details={item} onClick={handleBuy} />) 
        : null;
      const showSpinner = loader.isloading ? <Spinner />:  null
  return (
    <div>
       <Helmet>
        <title>Meli - Productos</title>
        <meta name="description" content={item.description} />
      </Helmet>
      {showSpinner}
      <Breadcrumb categories={item.categories}></Breadcrumb>
      <div className="content-body">{itemsHolder}</div>
    </div>
  );
};

export default Details;
