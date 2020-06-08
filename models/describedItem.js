const Item = require('./item');
const axios = require('axios');

class DescribedItem extends Item {
  constructor(id) {
    super(id);
  }

  getItemInformation() {
    return super.getItemInformation().then(() => {
      return this.getItemDescription().then((description) => {
        this.description = description;
      });
    });
  }

  getPublicInformation() {
    return Object.assign(super.getPublicInformation(), {
      description: this.description,
      sold_quantity: this.sold_quantity,
    });
  }

  getItemDescription() {
    return axios
      .get(this.enpointUrl + this.id + '/description')
      .then((description) => {
        return description.data.plain_text;
      });
  }
}

module.exports = DescribedItem;
