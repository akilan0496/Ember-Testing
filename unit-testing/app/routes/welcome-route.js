import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    edit() {
      this.set("someBoolean", true);
    }
  }
});
