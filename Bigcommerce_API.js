
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

//--Retrieves a particular products metafields list--
const get_product_metafields = async (store_hash,access_token, prodid) => {
    const config = {
        method: 'get',
        url: `https://api.bigcommerce.com/stores/${store_hash}/v3/catalog/products/${prodid}/metafields`,
        headers: { 'X-auth-token': access_token}
    }
  
    let res = await axios(config)
        .then((response) => {
          // console.log(response.data.data);
          return response.data.data
        })
        .catch((error) => {
          console.log(error.response.data);
          return error.response.data
        });
    return res
}

//--Updates the metafield value of a particular product's metafield--
const update_product_metafield = async (store_hash,access_token, prodid, metafield_id, matafield_value) => {
    var payload = { "description": matafield_value }

    let res = await axios.put(`https://api.bigcommerce.com/stores/${store_hash}/v3/catalog/products/${prodid}/metafields/${metafield_id}`, payload,
    { headers:{ "X-Auth-Token": access_token }})
        .then((response) => {
            // console.log(response.data);
            return response.data
        })
        .catch((error) => {
            console.log(error.response.data);
            return error.response.data
        });
    return res
}

//--Creates a metafield for a particular product--
const add_product_metafield = async (store_hash,access_token, prodid,  metafield_name, matafield_value) => {
    var payload = {
        "key": metafield_name,
        "value": metafield_name,
        "namespace": "attributes",
        "permission_set": "app_only",
        "description": matafield_value
    }

    let res = await axios.post(`https://api.bigcommerce.com/stores/${store_hash}/v3/catalog/products/${prodid}/metafields`, payload,
    { headers:{ "X-Auth-Token": access_token }})
        .then((response) => {
            // console.log(response.data);
            return response.data
        })
        .catch((error) => {
            console.log(error.response.data);
            return error.response.data
        });
    return res
}

//--Retrieves the details of a particular category using its ID--
const get_category_name = async (STORE_HASH, ACCESS_TOKEN, category_id) => {
    const config = {
        method: 'get',
        url: `https://api.bigcommerce.com/stores/${STORE_HASH}/v3/catalog/categories/${category_id}`,
        headers: { 'X-auth-token': ACCESS_TOKEN}
    }
  
    let res = await axios(config)
        .then((response) => {
          // console.log(response.data.data);
          return response.data.data
        })
        .catch((error) => {
          console.log(error.response.data);
          return error.response.data
        });
    return res
}