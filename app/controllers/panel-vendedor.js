import Ember from 'ember';
import { inject as service } from "@ember/service";

export default Ember.Controller.extend({
	store: service(),

	actions: {
		nuevo(cliente){
			this.get('store').createRecord('venta', {
				cliente: cliente
			}).save().then((venta)=>{
				this.transitionToRoute('panel_paquetes', venta.id)
			})
		}
	}
});
