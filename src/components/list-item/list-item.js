import './list-item.scss';
import React from 'react';
import { formPrice } from 'utils/utils';
import shipping from 'assets/images/ic_shipping.png';

const ListItem = (props) => {
  const { details, onClick } = props;

  const clicked = (e) => {
    onClick(details.id);
  };


  return (
    <div onClick={clicked} className="list-item" tabIndex="0">
      <div className="list-item__ImageHolder">
        <img src={details.picture} alt="Product" />
      </div>
      <div className="list-item__description full-width">
        <div>
          <div className="list-item__description__price">
            {formPrice(details.price)}
            {details.free_shipping && (
              <img
                className="freeshipping"
                src={shipping}
                alt="free shipping"
              />
            )}
          </div>
            <div className="list-item__description__title">
                {details.title}
            </div>
          
        </div>
        <div className="list-item__description__location">{details.location}</div>
      </div>
    </div>
  );
};

export default ListItem;
