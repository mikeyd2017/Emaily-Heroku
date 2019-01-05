// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    //we are in production - return the prod set of keys
    module.exports = require('./prod');
    Stripe.setPublishableKey('pk_test_BHU8BnoRyVGTlqT1Qi88uOl1');
} else {
    //we are in development - return the dev keys!
    module.exports = require('./dev');
}