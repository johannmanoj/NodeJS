const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;






// gets woo credentials from database
const woo_get_auth = async(userid) => {
    auth_row = await db.GetWooCommerceUserCredentials(userid)
    if (auth_row.data.length > 0){
        // console.log(auth_row.data[0]["store_url"])
        return auth_row.data[0]
    } else{
        return null
    }
}

const get_wcapi_object = async (personid=7) => {
    const auth_details = await woo_get_auth(personid)
    
    if (auth_details == null){
        return null
    }
    const wcapi = new WooCommerceRestApi({
        url: auth_details["store_url"],
        consumerKey: auth_details["consumer_key"],
        consumerSecret: auth_details["consumer_secret"], 
        version: 'wc/v3', 
        queryStringAuth: true 
    });
    // console.log(wcapi)
    return wcapi
}





module.exports = {};


