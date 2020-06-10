const axios = require('axios');
const price = require('./price');
class Item {
  constructor(id) {
    this.enpointUrl = 'https://api.mercadolibre.com/items/';
    this.id = id;
  }

  getItemInformation() {
    return axios
      .get(this.enpointUrl + this.id)
      .then((description) => description.data)
      .then((data) => {
        this.category=data.category_id;
        this.title = data.title;
        this.price = price(data.currency_id, data.price);
        this.picture = data.pictures[0].secure_url;
        this.condition = data.condition;
        this.free_shipping = data.shipping.free_shipping;
        this.sold_quantity = data.sold_quantity;
      });
  }

  getPublicInformation() {
    return {
      id: this.id,
      title: this.title,
      price: this.price,
      picture: this.picture,
      condition: this.condition,
      free_shipping: this.free_shipping,
    };
  }
}

module.exports = Item;
