import Ember from 'ember';
import { inject as service} from "@ember/service";
import { all } from 'rsvp';

export default Ember.Controller.extend({
	store: service(),
	actions: {
		agregar(paquete){
			paquete.get('ingredientes').createRecord({
				isExtra: false
			});
		},
		save(paquete){
			all(paquete.get('ingredientes').invoke('save')).then(()=>{
				paquete.save();
				this.transitionToRoute('paquetes')
			})
		}
	}
});
