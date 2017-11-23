import Ember from 'ember';
import { all } from 'rsvp';

export default Ember.Controller.extend({
	actions: {
		borrar(paquete){
			paquete.get('ingredientes').then((arr)=>{
				arr.invoke('destroyRecord');
			}).then(()=>{
				paquete.destroyRecord();
			});
		},
		editar(paquete){
			this.transitionToRoute('paquete', paquete.get('id'))
		}
	}
});