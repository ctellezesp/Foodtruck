import Ember from 'ember';
import { inject as service } from "@ember/service";

export default Ember.Route.extend({
	store: service(),
	model(params){
		return this.get('store').findRecord('pregunta', params.pregid)
	},
	actions: {
		save(pregunta){
			pregunta.save();
			this.transitionTo('preguntas')
		}
	}

});
