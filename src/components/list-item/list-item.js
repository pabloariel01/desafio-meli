import './list-item.scss';
import React from 'react';
import { formPrice } from 'utils/utils';
import { locations } from 'constants/constants';
import shipping from 'assets/images/ic_shipping.png';

const ListItem = (props) => {
  const { details, onClick } = props;

  const clicked = (e) => {
    onClick(details.id);
  };

// TODO: fix
//this fixes the missing location in endpoints 
  function getLocation(min, max) {
      const maximum=locations.length -1;
      const location=Math.floor(Math.random() * (maximum  + 1))
    return locations[location]
  }

  return (
    <div onClick={clicked} className="list-item">
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
        <div className="list-item__description__location">{getLocation()}</div>
      </div>
    </div>
  );
};

export default ListItem;
