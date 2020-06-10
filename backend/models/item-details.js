const itemFactory = require('./classes/item-factory');
const categoriesModel = require('./classes/categorie')

module.exports = async (itemId) => {
  return new Promise(async (resolve, reject) => {
    const item = itemFactory('detailed', itemId);
    item.getItemInformation().then(async(x) => {
      const currItem = {
        item: item.getPublicInformation(),
      };

      await categoriesModel(item.category).then(categories=>{
            
        currItem.categories=categories;
        resolve(currItem);
      })
    }).catch(error => reject(error.response.data));
  });
};
