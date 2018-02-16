import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    switch (this.get('c')) {
        case "dropdown":
        this.$('.dropdown-button').dropdown();
        break;
        case "collapsible":
        this.$('.collapsible').collapsible();
        break;
        case "select":
        this. $('select').material_select();
        break;
    }
  }
});
