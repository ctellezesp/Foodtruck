import Ember from 'ember';
import { inject as service } from "@ember/service";

export default Ember.Route.extend({
	store: service(),

	model(){
		let paquete = this.get('store').createRecord('paquete');
		paquete.get('ingredientes').createRecord({
			isExtra: false
		});
		return paquete;
	}
});
