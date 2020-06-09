const itemFactory = require('./item-factory');
const authorFactory = require('./author');

module.exports = async (itemId) => {
  return new Promise(async (resolve, reject) => {
    const item = itemFactory('detailed', itemId);
    item.getItemInformation().then((x) => {
      const currItem = {
        author: authorFactory(),
        item: item.getPublicInformation(),
      };
      resolve(currItem);
    }).catch(error => reject(error.response.data));
  });
};
