const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;


//--Woocommerce auth--
const get_wcapi_object = async (STORE_URL, CONSUMER_KEY, CONSUMER_SECRET) => {
    const wcapi = new WooCommerceRestApi({
        url: STORE_URL,
        consumerKey: CONSUMER_KEY,
        consumerSecret: CONSUMER_SECRET, 
        version: 'wc/v3', 
        queryStringAuth: true 
    });

    return wcapi
}

const getAllOrders = async (user_id) => {
    Woo = await get_wcapi_object(user_id)
    let allOrders = await Woo.get("orders")
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error.response.data;
    });
    console.log(allOrders[1])
    return allOrders;
}




module.exports = {};


