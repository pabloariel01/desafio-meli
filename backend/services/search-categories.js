const itemFactory = require('../models/item-factory');
const categoriesModel = require('../models/categorie');

module.exports = (itemId) => {
  return new Promise(async (resolve, reject) => {
    const item = itemFactory('short', itemId);
    item.getItemInformation().then(async (x) => {

      await categoriesModel(item.category).then(categories=>{

        resolve({categories});
      })
    }).catch(error=>reject(error.response.data));
  });
};
