import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		save(pregunta){
			pregunta.save();
			this.transitionToRoute('preguntas')
		}
	}
});
