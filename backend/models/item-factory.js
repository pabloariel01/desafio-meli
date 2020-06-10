const Item = require('./item')
const DescribedItem = require('./describedItem')
module.exports = (type,id)=>{
    let item;
    switch(type){
        case 'short':
            item=new Item(id)
            break;
        case 'detailed':
            item= new DescribedItem(id)
            break;
    }

    return item
}