const stripe = require('stripe')('Your Stripe SECRET KEY');

//--create a product--
const create_product = async (name) =>{
    const product = await stripe.products.create({
        name: name,
    });
    console.log("product",product);
    return product
}

//--Create a price for a product--
const create_price = async (product_id, amount) =>{
    const price = await stripe.prices.create({
        unit_amount: amount,
        currency: 'inr',
        product: product_id,
    }); 
    console.log("price",price);
    return price
}

//--Create a payment url--
const create_payment_url = async (price, quantity) =>{
    const paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: price,
            quantity: quantity,
          },
        ],
      });
    console.log("paymentIntent",paymentLink);
    return paymentLink
}
