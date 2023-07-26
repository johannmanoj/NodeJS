
//--Creates a new webhook for the store--
const create_webhook = async(store_hash, access_token, event, url) =>{  
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

//--Updates a particular webhook--
const update_webhook = async(store_hash, access_token, event) =>{
  var payload = {
      "scope": event,
      "destination": "Recieving URL",
      "is_active": true,
      "events_history_enabled": true,
      "headers": {
      "custom": "string"
      }
  }

  let res = await axios.post(`https://api.bigcommerce.com/stores/${store_hash}/v3/hooks`, payload,
  { headers:{
      "Accept":"application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": access_token}})
  .then((response) => {
      return response.data
  })
  .catch((error) => {
      console.log(error.response.data);
      return error.response.data
  });
}

//--Retrieves list of webhooks for a store--
const get_webhooks = async(store_hash, access_token) =>{
  let res = await axios.get(`https://api.bigcommerce.com/stores/${store_hash}/v3/hooks`,
  { headers:{
      "Accept":"application/json",
      "Content-Type": "application/json",
      "X-Auth-Token": access_token}})
  .then((response) => {
      return response.data
  })
  .catch((error) => {
      console.log(error.response.data);
      return error.response.data
  });
}

//--Deletes a particular webhook from the store--
const delete_webhook = async (store_hash, access_token,webhook_id) => {
  const config = {
      method: 'delete',
      url: `https://api.bigcommerce.com/stores/${store_hash}/v3/hooks/`+ webhook_id,
      headers: { 'X-auth-token': access_token}
  }

  let res = await axios(config)
      .then((response) => {
          return response.data.data
      })
      .catch((error) => {
          console.log(error.response.data);
          return error.response.data
      });

  return res
}