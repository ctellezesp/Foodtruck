import Ember from 'ember';
import { computed } from '@ember/object';
import { inject as service } from "@ember/service";
import { all } from 'rsvp';

export default Ember.Controller.extend({
	store: service(),
	// mPaquete: computed('paquete', function () {
	// 	if(this.get('paquete'))
	// 		return this.get('model').findBy('id', this.get('paquete'))
	// 	else
	// 		return null
	// }),
	actions: {
		agregar(paquete){
			paquete.get("ingredientes").createRecord({
				isExtra: true
			})
		},
		save(paquete){

			all(paquete.get('ingredientes').invoke('save')).then(()=>{
				paquete.save()
				window.Materialize.toast("Ingredientes Guardados Exitosamente", 4000)
				this.transitionToRoute("ing_extra")
			})
		}
	}
});
