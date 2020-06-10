import React from 'react';
import './item-description.scss';
import { formPrice } from 'utils/utils';
import { BUY, ProductDescription } from 'constants/constants';
import shipping from 'assets/images/ic_shipping.png';
import { conditions } from 'constants/constants';

const ItemDescription = (props) => {
  const { item } = props.details;
  const clickHandler = props.onClick;
  const itemCondition = `${conditions[item.condition]} - ${item.sold_quantity} vendidos`;

  const buyItem = () => {
    clickHandler(item);
  };

  const finalprice = formPrice(item.price) ? formPrice(item.price) : null;

  return (
    <div className="item-layout">
      <div className="item-layout__header">
        <div className="item-layout__header__picture">
          <img src={item.picture} alt="product" />
        </div>
        <div className="item-layout__header__details">
          <p className="item-layout__header__details__condition">
            {itemCondition}
          </p>
          <p className="item-layout__header__details__title">{item.title}</p>
          <p className="item-layout__header__details__price">
            {finalprice}{' '}
            {item.free_shipping && (
              <img
                className="item-layout__header__details__price-freeshipping"
                src={shipping}
                alt="free shipping"
              />
            )}
          </p>
          <button
            tabIndex="0"
            className="item-layout__header__details__button"
            onClick={buyItem}
          >
            {BUY}
          </button>
        </div>
      </div>
      <div className="item-layout__description">
        <div className="item-layout__description__title">
          {ProductDescription}
        </div>
        <div className="item-layout__description__detail">
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
