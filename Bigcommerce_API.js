
//--Creates a new webhook for the store--
const create_webhook = async(store_hash, access_token , event, url) =>{  
    var payload = {
      "scope": event,
      "destination": url,
      "is_active": true
    }
  
    let res = await axios.post(`https://api.bigcommerce.com/stores/${store_hash}/v3/hooks`, payload,
    { headers:{
        "X-Auth-Token": access_token}})
    .then((response) => {
        // console.log(response.data);
        return response.data
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data
    });
}