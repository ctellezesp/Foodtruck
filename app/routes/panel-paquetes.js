import Ember from 'ember';
import { inject as service } from "@ember/service";
import { hash } from 'rsvp';


export default Ember.Route.extend({
	store: service(),
	model(params){
		return hash({
			paquetes: this.get('store').findAll('paquete'),
			venta: this.get('store').findRecord('venta', params.venta_id)
		});
	}

});
