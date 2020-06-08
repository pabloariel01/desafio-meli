const axios = require('axios');
const authorFactory = require('./author');
const categoriesModel = require('./categorie');
const ItemFactory = require('./item-factory');

module.exports = (query) => {
  const limit = 4;
  return new Promise((resolve, reject) => {
    axios
      .get(
        'https://api.mercadolibre.com/sites/MLA/search?q=' +
          query +
          '&limit=' +
          limit
      )
      .then(
        async (result) => {
          // console.log(result.data.results)
          const results = result.data.results;
          itemSearch = await results.reduce(
            async (prev, curr) => {
              const prevItem = await prev;

              if (!prevItem.categories.includes(curr.category_id)) {
                prevItem.categories.push(curr.category_id);
              }
              const item = ItemFactory('short',curr.id);
              await item.getItemInformation();
              const currItem = item.getPublicInformation();
              prevItem.items.push(currItem);

              return prevItem;
            },
            Promise.resolve({
              author: authorFactory(),
              categories: [],
              items: [],
            })
          );
         await categoriesModel(itemSearch.categories[0]).then(categories=>{
            
            itemSearch.categories=categories;
            resolve(itemSearch);
          })

        },
        (error) => {
          reject(new Error('error'));
        }
      )
      .catch((error) => {
        console.log(error);
      });
  });
};
