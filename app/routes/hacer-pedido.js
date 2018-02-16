import Ember from 'ember';
import { inject as service } from "@ember/service";
import { hash } from 'rsvp';

export default Ember.Route.extend({
	store: service(),
	model(params){
		return this.get('store').findRecord('pedido', params.pedido_id)
	}
});
