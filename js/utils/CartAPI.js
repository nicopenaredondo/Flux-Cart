var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {

  getProductDate: function(){
    var data = JSON.parse(localStorage.getItem('product'));
    FluxCartActions.receiveProduct(data);
  }
}