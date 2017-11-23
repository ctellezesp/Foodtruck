import Ember from 'ember';
import { inject as service } from "@ember/service";
import { all } from 'rsvp';

export default Ember.Route.extend({
	store: service(),

	model(params){
		return this.get('store').findRecord('paquete', params.packid)
	},
	actions: {
		save(paquete){
			all(paquete.get('ingredientes').invoke('save')).then(()=>{
				paquete.save();
				this.transitionTo('paquetes')
			})
		},
		agregar(paquete){
			paquete.get('ingredientes').createRecord();
		}
	}
});
