import Ember from 'ember';
import { inject as service } from "@ember/service";

export default Ember.Route.extend({
	store: service(),
	model(){
		return this.get('store').createRecord('pregunta');
	}


});
