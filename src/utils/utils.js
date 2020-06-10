import { currencies } from 'constants/constants';
import { useLocation } from 'react-router-dom';
import React from 'react';

export const formPrice = (price) => {
  return currencies[price.currency] + (price.ammount + price.decimals);
};

export const useHandleError = (error) => {
    const location = useLocation()
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
  location.push('/');
  return null
};
