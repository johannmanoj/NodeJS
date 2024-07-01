const Razorpay = require("razorpay");

KEY_ID = ""
KEY_SECRET = ""


//--Retrieves the orders from the razorpay account--
const get_orders_list = async (user_id) =>{
    var orders_list = ""

    if(credentials["data"].length > 0){
        var instance =  new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })
        orders_list = await instance.orders.all()
    }
    return orders_list
}


