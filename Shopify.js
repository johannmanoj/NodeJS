const axios = require("axios")

//--Retrieves the store products list--
const get_product_list = async (API_KEY,ACCESS_TOKEN,SHOP_NAME) => {
    const response = await axios({url: `https://${API_KEY}:${ACCESS_TOKEN}@${SHOP_NAME}.myshopify.com/admin/api/2023-07/products.json`, method: "get",})
    .then((response) => {
        // console.log(response.data)
        return response.data;
    })
    .catch((error) => {
        console.log(error.response.data)
        return error.response.data;
    });
   
    return response
}