import Ember from 'ember';
import env from '../config/environment';

export default Ember.Service.extend({

  add(item) {
    var items = window.localStorage.getItem(env.APP.cartKey);
    if (items) {
      items = JSON.parse(items);
      if (items[item.id]) {
        items[item.id].quantity += 1;
      } else {
        item.quantity = 1;
        items[item.id] = item;
      }
    } else {
      items = {};
      item.quantity = 1;
      items[item.id] = item;
    }

    items = JSON.stringify(items);
    window.localStorage.setItem(env.APP.cartKey, items);
    return item;
  }

});
