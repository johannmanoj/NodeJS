const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const STORE_URL = ""
const CONSUMER_KEY = ""
const CONSUMER_SECRET = ""


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

//--Retrieves Orders list--
const getAllOrders = async (STORE_URL, CONSUMER_KEY, CONSUMER_SECRET) => {
    wcapi = await get_wcapi_object(STORE_URL, CONSUMER_KEY, CONSUMER_SECRET)
    let allOrders = await wcapi.get("orders")
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error.response.data;
    });

    return allOrders;
}

//--Retrieves Products list--
const getAllProducts = async (STORE_URL, CONSUMER_KEY, CONSUMER_SECRET) => {
    var page = 1;
    var data = [];
    wcapi = await get_wcapi_object(STORE_URL, CONSUMER_KEY, CONSUMER_SECRET)
    
    do {
        var allProducts = await wcapi.get(`products?page=${page}`)
        .then((response) => {
            page += 1;
            for(let i in response.data) {
                data.push(response.data[i]);
            }
            return response.data;
        })
        .catch((error) => {
            return error.response.data
        });
    } while (allProducts.length > 9);


    return data;
}

//--Create Webhook--
const create_webhook = async (STORE_URL, CONSUMER_KEY, CONSUMER_SECRET, name, topic, delivery_url) => {
    const wcapi = await woocommerce_auth.woo_auth(STORE_URL, CONSUMER_KEY, CONSUMER_SECRET)

    if (wcapi == null){ return "" }  

    const data = {
        "name": name,
        "topic": topic,
        "delivery_url": delivery_url
    };
      
    wcapi.post("webhooks", data)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error.response.data);
        return error.response.data
    });
}




module.exports = {};


