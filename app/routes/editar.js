import Ember from 'ember';
import { inject as service } from "@ember/service";

export default Ember.Route.extend({
	store: service(),
	model(params){
		return this.get('store').findRecord('vendedor', params.vendorid);
	},
	actions: {
		save(vendedor){
			vendedor.save().then(()=>{
				this.transitionTo('info_vendedor', vendedor.get('id'))
			})
		}
	}
});
