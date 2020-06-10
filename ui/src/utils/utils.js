import { currencies } from 'constants/constants';

export const formPrice = (price) => {
  return currencies[price.currency] + (price.ammount + price.decimals);
};

