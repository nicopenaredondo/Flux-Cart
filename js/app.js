window.react = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');


//Load Mock product data into local storage
ProductData.init();

//Load mock api call
CartAPI.getProductData();

React.render(
  <FluxCartApp/>,
  document.getElementById('flux-cart')
);
