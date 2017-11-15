import Ember from 'ember';
import { inject as service} from "@ember/service"


export default Ember.Route.extend({
	firebase: service('firebaseApp'),

	beforeModel(){
		this.get('session').fetch().then(()=>{
		this.get('session').close();
			
		})
		// this.get('firebase').auth().createUserWithEmailAndPassword("carlos@tellez.com", "123123").then((usuario)=>{
		// 	debugger
		// });
	}
});
