import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service(),

  model() {
    window.localStorage.removeItem('cart');
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }
    ];
  },

  actions: {
    addToCart(item) {
      this.get('cart').add(item);
      this.controller.set('cartItems', this.get('cart').all());
    }
  }
});
