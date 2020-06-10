const axios =require('axios')

module.exports = (categoryId) =>{
    return axios.get('https://api.mercadolibre.com/categories/'+categoryId)
        .then((category)=> {
            return category.data.path_from_root.map(cat=>cat.name) 
        })
}