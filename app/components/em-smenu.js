import Ember from 'ember';

export default Ember.Component.extend({

	didInsertElement(){
		window.Materialize.updateTextFields();
	}
});
